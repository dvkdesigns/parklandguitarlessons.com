import { getGearPostBySlug } from '@/lib/gear';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await import('@/lib/gear').then((m) => m.getAllGearPosts());
  return posts.map(({ slug }) => ({ slug }));
}

export default async function GearReviewPage({ params }: Props) {
  const post = getGearPostBySlug(params.slug);
  if (!post) return notFound();

  const html = marked(post.content);

  return (
    <main className="w-full bg-white dark:bg-neutral-900">
      {/* Full-width hero image */}
      <div className="w-full relative">
        <img
          src={post.meta.image}
          alt={post.meta.title}
          className="w-full h-96 object-cover object-center brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute bottom-8 left-8 max-w-5xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            {post.meta.title}
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 relative grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16">
        {/* Main Content */}
        <article className="prose lg:prose-xl prose-neutral dark:prose-invert max-w-none">
          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="mr-4 font-semibold">Category:</span>{post.meta.category}
            <span className="ml-6">★ {post.meta.rating}</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300">{post.meta.description}</p>

          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        {/* Sidebar CTA */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <div className="bg-green-700 text-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎸 Ready to Buy?</h3>
            <p className="mb-6">Grab the Boss Katana Gen 3 Artist from a trusted retailer.</p>
            <a
              href={post.meta.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Buy on Amazon →
            </a>
          </div>
        </aside>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden px-6 pb-12">
        <a
          href={post.meta.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg"
        >
          🎸 Buy the Katana Artist on Amazon
        </a>
      </div>
    </main>
  );
}
