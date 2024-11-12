import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "../types/article";

const postsDir = path.join(process.cwd(), "posts");

export const getAllPosts = (): Article[] => {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((fileName: string) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { content, data } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      author: data.author,
      category: data.category,
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    category: data.category,
    content,
  };
}

export function getPostsByCategory(category: string) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
