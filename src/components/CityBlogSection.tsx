import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  mainImage: string;
};

type Props = {
  city: {
    name: string;
  };
};

export default function CityBlogSection({ city }: Props) {
  const postsDirectory = path.join(process.cwd(), 'src/content');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: BlogPost[] = fileNames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      mainImage: data.mainImage,
    };
  });

  const cityName = city.name.toLowerCase();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(cityName)
  );

  if (filteredPosts.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Guitar Tips & Local Posts in {city.name}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/guitar-chalk/${post.slug}`}
            className="block bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.mainImage}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.subtitle}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
