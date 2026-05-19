import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const siteUrl = (process.env.SITE_URL || 'https://yosef-ayman.github.io').replace(/\/$/, '');
const basePath = (process.env.VITE_BASE_PATH || '/').replace(/^\/?/, '/').replace(/\/?$/, '/');
const publicDir = resolve('public');

const projectIds = ['simple-audio-player', 'tic-tac-toe', 'image-processing', 'frontend-mentor'];
const routes = ['/', '/projects', '/experience', ...projectIds.map((id) => `/projects/${id}`)];

function absoluteUrl(route) {
  const path = `${basePath}${route.replace(/^\//, '')}`.replace(/\/$/, '') || '/';
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

await mkdir(dirname(resolve(publicDir, 'sitemap.xml')), { recursive: true });
await writeFile(resolve(publicDir, 'sitemap.xml'), sitemap);
await writeFile(resolve(publicDir, 'robots.txt'), robots);
