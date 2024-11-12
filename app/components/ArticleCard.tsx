import { Article } from "../types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.category}</p>
      <a href={`/posts/${article.slug}`}>Leer más</a>
    </div>
  );
};

export { ArticleCard };
