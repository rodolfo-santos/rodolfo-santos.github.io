import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function setupMenu(): () => void {
  const toggle =
    document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return () => {};

  const controller = new AbortController();
  const narrow = window.matchMedia('(max-width: 767px)');
  let open = false;
  const setOpen = (next: boolean, restoreFocus = false) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      open ? 'Fechar navegação' : 'Abrir navegação',
    );
    panel.dataset.open = String(open);
    panel.classList.toggle('is-open', open);
    panel.inert = narrow.matches && !open;
    document.documentElement.classList.toggle(
      'menu-open',
      narrow.matches && open,
    );
    if (restoreFocus) toggle.focus();
  };

  document.documentElement.classList.add('js-menu-ready');
  document.documentElement.dataset.enhanced = 'true';
  setOpen(false);
  toggle.addEventListener(
    'click',
    (event) => {
      setOpen(!open);
      if (open && event.detail === 0)
        panel.querySelector<HTMLAnchorElement>('a')?.focus();
    },
    { signal: controller.signal },
  );
  panel.addEventListener(
    'click',
    (event) => {
      if (event.target instanceof Element && event.target.closest('a'))
        setOpen(false);
    },
    { signal: controller.signal },
  );
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && open) setOpen(false, true);
    },
    { signal: controller.signal },
  );
  document.addEventListener(
    'click',
    (event) => {
      if (
        open &&
        event.target instanceof Node &&
        !panel.contains(event.target) &&
        !toggle.contains(event.target)
      )
        setOpen(false);
    },
    { signal: controller.signal },
  );
  narrow.addEventListener('change', () => setOpen(false), {
    signal: controller.signal,
  });

  return () => {
    controller.abort();
    panel.inert = false;
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir navegação');
    document.documentElement.classList.remove('js-menu-ready', 'menu-open');
    delete document.documentElement.dataset.enhanced;
  };
}

function setupMotion(forceReduced = false): () => void {
  if (forceReduced) return () => {};
  const media = gsap.matchMedia();
  media.add(
    {
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 900px) and (hover: hover) and (pointer: fine)',
    },
    (context) => {
      const conditions = context.conditions;
      if (!conditions?.motion) return;

      const heroCopy = document.querySelector<HTMLElement>('[data-hero-copy]');
      const heroPortrait = document.querySelector<HTMLElement>(
        '[data-hero-portrait]',
      );
      const hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (heroCopy)
        hero.from(heroCopy.children, {
          y: 10,
          duration: 0.5,
          stagger: 0.025,
        });
      if (heroPortrait)
        hero.from(heroPortrait, { y: 12, scale: 0.99, duration: 0.7 }, 0.12);

      const progress = document.querySelector<HTMLElement>('[data-progress]');
      if (progress)
        gsap.fromTo(
          progress,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
          },
        );

      // Reading content stays still and visible. Scroll motion explains the
      // financial flow below, rather than delaying each paragraph's arrival.
      const stackMarks =
        document.querySelectorAll<HTMLElement>('[data-stack-mark]');
      const stackContainer = stackMarks.item(0)?.parentElement;
      if (stackContainer) {
        gsap.from(stackMarks, {
          y: 20,
          rotation: -2,
          duration: 0.65,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stackContainer,
            start: 'top 88%',
            once: true,
          },
        });
      }
      for (const figure of document.querySelectorAll<HTMLElement>(
        '.project-showcase__image-frame, .speaking-event__photo-frame',
      )) {
        const image = figure.querySelector('img');
        if (image)
          gsap.fromTo(
            image,
            { scale: 1.04 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: figure,
                start: 'top bottom',
                end: 'bottom center',
                scrub: 0.5,
              },
            },
          );
      }

      const architecture = document.querySelector<HTMLElement>(
        '[data-architecture]',
      );
      if (architecture) {
        const paths =
          architecture.querySelectorAll<SVGPathElement>('[data-flow-path]');
        const flow = gsap.timeline({
          scrollTrigger: {
            trigger: architecture,
            start: 'top 78%',
            end: 'center 35%',
            scrub: 0.65,
          },
        });
        for (const path of paths) {
          const length = path.getTotalLength();
          flow.fromTo(
            path,
            { strokeDasharray: length, strokeDashoffset: length },
            { strokeDashoffset: 0, ease: 'none', duration: 1 },
            '<20%',
          );
        }
        flow.from(
          architecture.querySelectorAll('[data-flow-node]'),
          { y: 12, duration: 1, stagger: 0.12, ease: 'none' },
          0,
        );
        const particle = architecture.querySelector<SVGGElement>(
          '[data-flow-particle]',
        );
        if (particle)
          flow.to(particle, { x: 420, ease: 'none', duration: 2 }, 0);
      }

      const line = document.querySelector<HTMLElement>('[data-timeline-line]');
      if (line)
        gsap.fromTo(
          line,
          { scaleY: 0.06, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line.parentElement,
              start: 'top 72%',
              end: 'bottom 65%',
              scrub: 0.4,
            },
          },
        );

      const pointerCleanup: Array<() => void> = [];
      if (conditions.desktop) {
        for (const card of document.querySelectorAll<HTMLElement>(
          '[data-tilt]',
        )) {
          const move = (event: PointerEvent) => {
            const bounds = card.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;
            card.style.setProperty('--pointer-x', `${x * 100}%`);
            card.style.setProperty('--pointer-y', `${y * 100}%`);
            gsap.to(card, {
              rotationY: (x - 0.5) * 3,
              rotationX: (0.5 - y) * 3,
              transformPerspective: 1000,
              duration: 0.6,
              overwrite: 'auto',
              ease: 'power2.out',
            });
          };
          const leave = () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.7,
              overwrite: 'auto',
            });
          };
          card.addEventListener('pointermove', move);
          card.addEventListener('pointerleave', leave);
          pointerCleanup.push(() => {
            card.removeEventListener('pointermove', move);
            card.removeEventListener('pointerleave', leave);
            gsap.killTweensOf(card);
            gsap.set(card, { clearProps: 'transform' });
            card.style.removeProperty('--pointer-x');
            card.style.removeProperty('--pointer-y');
          });
        }
      }

      return () => {
        for (const clean of pointerCleanup) clean();
      };
    },
  );

  return () => media.revert();
}

let cleanup: (() => void) | undefined;
let userReduced = false;
function initialize(): void {
  cleanup?.();
  const cleanMenu = setupMenu();
  const loadController = new AbortController();
  const systemReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionToggle = document.querySelector<HTMLButtonElement>(
    '[data-motion-toggle]',
  );
  let cleanMotion: () => void = () => {};
  const updateMotion = () => {
    cleanMotion();
    const reduced = userReduced || systemReduced.matches;
    document.documentElement.dataset.motion = reduced ? 'reduced' : 'full';
    cleanMotion = setupMotion(reduced);
    if (motionToggle) {
      motionToggle.hidden = false;
      motionToggle.disabled = systemReduced.matches;
      motionToggle.setAttribute('aria-pressed', String(reduced));
      const label = motionToggle.querySelector('[data-motion-label]');
      if (label)
        label.textContent = reduced
          ? 'Movimento reduzido'
          : 'Reduzir movimento';
      motionToggle.title = systemReduced.matches
        ? 'Preferência de movimento reduzido do seu sistema.'
        : 'Alternar os efeitos de movimento nesta página.';
    }
  };
  updateMotion();
  motionToggle?.addEventListener(
    'click',
    () => {
      userReduced = !userReduced;
      updateMotion();
    },
    { signal: loadController.signal },
  );
  systemReduced.addEventListener('change', updateMotion, {
    signal: loadController.signal,
  });
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh, {
    once: true,
    signal: loadController.signal,
  });
  document.fonts.ready
    .then(() => {
      if (!loadController.signal.aborted) refresh();
    })
    .catch(() => {});
  cleanup = () => {
    cleanMenu();
    cleanMotion();
    loadController.abort();
    if (motionToggle) motionToggle.hidden = true;
    delete document.documentElement.dataset.motion;
  };
}

if (document.readyState === 'loading')
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();
document.addEventListener('astro:page-load', initialize);
document.addEventListener('astro:before-swap', () => cleanup?.());
window.addEventListener('pagehide', () => cleanup?.());
window.addEventListener('pageshow', (event) => {
  if (event.persisted) initialize();
});
