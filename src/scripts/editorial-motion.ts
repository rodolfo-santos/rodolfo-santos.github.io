import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// The existing motion module owns the menu, toggle and data-motion state.
// This module only enhances the home page's explicitly marked visual layers.
const enteredHeroes = new WeakSet<HTMLElement>();

function enhanceEditorial(): () => void {
  const media = gsap.matchMedia();
  media.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 1000px) and (hover: hover) and (pointer: fine)',
    },
    (context) => {
      if (!context.conditions?.motion) return;
      const desktop = context.conditions.desktop;
      const hero = document.querySelector<HTMLElement>('[data-editorial-hero]');
      if (hero && !enteredHeroes.has(hero)) {
        enteredHeroes.add(hero);
        // Never hide the name, professional proposition or contact actions.
        const title = hero.querySelector<HTMLElement>('[data-editorial-title]');
        const portrait = hero.querySelector<HTMLElement>(
          '[data-editorial-portrait]',
        );
        const entrance = gsap.timeline({
          defaults: { ease: 'power3.out', duration: 0.85 },
        });
        if (title) entrance.from(title, { y: desktop ? 24 : 10 }, 0);
        if (portrait)
          entrance.from(
            portrait,
            {
              y: desktop ? 52 : 20,
              rotation: desktop ? -4 : -1.5,
              scale: 0.94,
              duration: 1.05,
              clearProps: 'transform',
            },
            0.05,
          );
      }

      const chapter = document.querySelector<HTMLElement>(
        '[data-editorial-chapter]',
      );
      const surface = chapter?.querySelector<HTMLElement>(
        '[data-editorial-chapter-surface]',
      );
      if (chapter && surface)
        gsap.fromTo(
          surface,
          {
            scaleX: desktop ? 0.78 : 0.94,
            rotation: desktop ? -2 : 0,
            transformOrigin: 'center bottom',
          },
          {
            scaleX: 1,
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: chapter,
              start: 'clamp(top bottom)',
              end: 'clamp(top 35%)',
              scrub: 0.55,
            },
          },
        );

      const gallery = document.querySelector<HTMLElement>(
        '[data-editorial-gallery]',
      );
      if (!desktop || !gallery) return;

      const cards = [
        ...gallery.querySelectorAll<HTMLElement>('[data-gallery-card]'),
      ];
      gallery.dataset.galleryEnhanced = 'true';
      cards.forEach((card, index) => {
        const preview = card.querySelector<HTMLElement>(
          '[data-gallery-preview]',
        );
        if (!preview) return;
        const position = index - (cards.length - 1) / 2;
        // Only image wrappers move: titles, contributions and links stay put.
        // CSS composes these variables, avoiding the legacy image transforms.
        gsap.fromTo(
          preview,
          {
            '--gallery-x': `${position * 12}px`,
            '--gallery-y': `${8 + Math.abs(position) * 4}px`,
            '--gallery-z': `${-80 - Math.abs(position) * 18}px`,
            '--gallery-ry': `${position * -14}deg`,
            '--gallery-rz': `${position * 3}deg`,
            '--gallery-scale': 0.94,
          },
          {
            '--gallery-x': `${position * -8}px`,
            '--gallery-y': `${-26 + Math.abs(position) * 12}px`,
            '--gallery-z': '0px',
            '--gallery-ry': `${position * 6}deg`,
            '--gallery-rz': `${position * -1.5}deg`,
            '--gallery-scale': 1,
            ease: 'none',
            scrollTrigger: {
              trigger: gallery,
              start: 'clamp(top 85%)',
              end: 'clamp(bottom 25%)',
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      return () => {
        delete gallery.dataset.galleryEnhanced;
      };
    },
  );
  return () => media.revert();
}

let cleanup: (() => void) | undefined;

function initializeEditorial(): void {
  cleanup?.();
  // Do not attach observers or animation work on case/CV routes.
  if (!document.querySelector('[data-editorial-hero]')) return;
  const controller = new AbortController();
  let cleanEffects: (() => void) | undefined;
  let active = false;
  const syncMotion = () => {
    const next = document.documentElement.dataset.motion === 'full';
    if (next === active) return;
    active = next;
    cleanEffects?.();
    cleanEffects = next ? enhanceEditorial() : undefined;
  };
  // React to the authoritative state, regardless of script execution order.
  const observer = new MutationObserver(syncMotion);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-motion'],
  });
  syncMotion();

  const refresh = () => {
    if (!controller.signal.aborted && active) ScrollTrigger.refresh();
  };
  document.fonts.ready.then(refresh).catch(() => {});
  window.addEventListener('load', refresh, {
    once: true,
    signal: controller.signal,
  });
  for (const image of document.querySelectorAll<HTMLImageElement>(
    '[data-editorial-gallery] img, [data-editorial-portrait] img',
  )) {
    if (!image.complete)
      image.addEventListener('load', refresh, {
        once: true,
        signal: controller.signal,
      });
  }
  cleanup = () => {
    observer.disconnect();
    controller.abort();
    cleanEffects?.();
  };
}

if (document.readyState === 'loading')
  document.addEventListener('DOMContentLoaded', initializeEditorial, {
    once: true,
  });
else initializeEditorial();
document.addEventListener('astro:page-load', initializeEditorial);
document.addEventListener('astro:before-swap', () => cleanup?.());
window.addEventListener('pagehide', () => cleanup?.());
window.addEventListener('pageshow', (event) => {
  if (event.persisted) initializeEditorial();
});
