import { getPostSlugs } from '@/lib/blog';

export async function GET() {
  const baseUrl = 'https://www.parklandguitarlessons.com';
  const postSlugs = await getPostSlugs();

  const cityPages = [
    'guitar-lessons-parkland-fl',
    'parkland-guitar-tutor',
    'adult-guitar-lessons-parkland',
    'guitar-lessons-boca-raton-fl',
    'guitar-lessons-coral-springs-fl',
    'guitar-lessons-coconut-creek-fl',
    'guitar-lessons-deerfield-beach-fl',
  ];

  const staticPages = [
    '',
    'guitar-chalk',
    'contact',
  ];

  const urls = [
    ...staticPages.map((page) => `${baseUrl}/${page}`),
    ...cityPages.map((city) => `${baseUrl}/${city}`),
    ...postSlugs.map((slug) => `${baseUrl}/guitar-chalk/${slug.replace('.md', '')}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
    <url>
      <loc>${url}</loc>
    </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
