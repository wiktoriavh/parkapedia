import fs from 'fs';
import { join } from 'path';

const dinosaursDirectory = join(process.cwd(), '_wiki/dinosaurs');

const directories: Record<string, string> = {
  dinosaurs: dinosaursDirectory,
};

export function getPostSlugs(category: Category) {
  return fs.readdirSync(directories[category]);
}

export function getPostBySlug(slug: string, category: Category) {
  const word = slug.replace(/\.json/u, '');
  const filePath = join(directories[category], `${word}.json`);
  const post = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return post;
}

export function getAllPosts(category: Category) {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, category))
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    });

  return posts;
}

type Category = 'dinosaurs';
