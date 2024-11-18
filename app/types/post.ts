interface Post {
  id: number;
  title: { en: string; es: string };
  resume: { en: string; es: string };
  content: string;
  category: string;
  created_at: string;
  author: string;
  slug: string;
}

export type { Post };
