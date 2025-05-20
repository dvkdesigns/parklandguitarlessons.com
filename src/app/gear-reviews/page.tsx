import Link from 'next/link';
import { getAllGearPosts } from '@/lib/gear';

export default function GearReviewIndex() {
  const posts = getAllGearPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Gear Reviews</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Honest reviews of real gear, tested in live and studio environments. Affiliate-supported, musician-approved.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ slug, meta }) => (
          <div key={slug} className="border rounded-xl shadow hover:shadow-lg transition">
            <img src={meta.image} alt={meta.title} className="w-full h-52 object-cover rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{meta.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{meta.category}</p>
              <p className="text-gray-700 mb-3">{meta.description}</p>
              <div className="flex items-center text-yellow-500 mb-4">★ {meta.rating}</div>
              <div className="flex gap-4">
                <Link
                  href={`/gear-reviews/${slug}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read Full Review
                </Link>
                <a
                  href={meta.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
