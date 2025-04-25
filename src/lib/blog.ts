import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { 
    slug: realSlug,
    meta: {
      title: data.metaTitle,
      description: data.metaDescription,
      date: data.date,
      image: data.mainImage || null, // ✅ Map mainImage ➔ image here
      // Add any other fields you want from frontmatter
    },
    content,
  };
}

export async function getPostHtml(slug: string) {
  const { content, ...rest } = getPostBySlug(slug);
  const processed = await remark().use(html).process(content);
  return {
    ...rest,
    contentHtml: processed.toString(),
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map(getPostBySlug).sort((a, b) =>
    new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
}
