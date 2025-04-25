import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

type Props = {
  title?: string;
  count?: number;
};

export default function LatestBlogSection({ title = 'Latest from the Blog', count = 9 }: Props) {
  const posts = getAllPosts().slice(0, count);

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {posts.map(({ slug, meta }) => (
          <li key={slug} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <img src={meta.image} alt={meta.title} className="my-8 w-300 h-auto rounded" />
            <h3 className="text-lg font-bold mb-2">{meta.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{meta.description}</p>
            <Link href={`/guitar-chalk/${slug}`} className="text-orange-600 hover:underline">Read More →</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
