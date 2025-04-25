import { getPostHtml, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Script from 'next/script';

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await import('@/lib/blog').then((m) => m.getPostSlugs());
  return posts.map((slug) => ({ slug: slug.replace(/\.md$/, '') }));
}

// ✅ SEO / OG / Twitter meta generator
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const baseUrl = 'https://www.parklandguitarlessons.com';
  const imageUrl = post.meta.image || `${baseUrl}/og/${params.slug}.jpg`;

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `${baseUrl}/guitar-chalk/${params.slug}`,
      type: 'article',
      siteName: 'Parkland Guitar Lessons',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostHtml(params.slug);
  if (!post) return notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.meta.title,
    "description": post.meta.description,
    "datePublished": post.meta.date,
    "author": {
      "@type": "Person",
      "name": "Dan Kariamis" // Replace with your name or brand
    },
    "publisher": {
      "@type": "Organization",
      "name": "Parkland Guitar Lessons",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.parklandguitarlessons.com/logo.png" // Replace with your actual logo
      }
    },
    "image": post.meta.image || `https://www.parklandguitarlessons.com/og/${params.slug}.jpg`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.parklandguitarlessons.com/guitar-chalk/${params.slug}`
    }
  };

  return (
    <>
      {/* ✅ Inject JSON-LD structured data for Article */}
      <Script
        id={`ld-post-${params.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-6xl mx-auto p-8 prose">
        <h1 className="text-lg text-orange-600">{post.meta.title}</h1>
        <img src={post.meta.image} alt={post.meta.title} className="my-8 max-w-sm h-auto rounded float-right" />


        <p className="text-sm text-gray-500 mb-8">{post.meta.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </>
  );
}
