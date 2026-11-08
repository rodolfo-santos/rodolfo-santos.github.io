import type { APIRoute } from 'astro';
import { caseStudies } from '../content/case-studies';

export const GET: APIRoute = ({ site }) => {
  if (!site)
    throw new Error('Defina site no astro.config para gerar o sitemap.');
  const routes = [
    '/',
    ...caseStudies.map(({ slug }) => `/projetos/${slug}/`),
    '/curriculo/',
  ];
  const urls = routes.map(
    (route) => `<url><loc>${new URL(route, site).href}</loc></url>`,
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
};
