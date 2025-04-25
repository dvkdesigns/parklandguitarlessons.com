import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Guitar Chalk Blog</h1>
      <ul className="space-y-6">
        {posts.map(({ slug, meta }) => (
          <li key={slug}>
            <Link href={`/guitar-chalk/${slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">{meta.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm">{meta.date}</p>
            <p className="text-gray-800">{meta.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
