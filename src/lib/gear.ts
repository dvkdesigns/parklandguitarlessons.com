import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const gearDir = path.join(process.cwd(), 'src/content/gear-reviews');

export function getAllGearPosts() {
  const files = fs.readdirSync(gearDir);

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(gearDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug,
      meta: data,
    };
  });
}

export function getGearPostBySlug(slug: string) {
  const filePath = path.join(gearDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    meta: data,
    content,
  };
}
