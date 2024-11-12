import Link from "next/link";
import { Article } from "../types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-category">{article.category}</p>
      <p className="article-date">{article.date}</p>
      <Link
        href={{
          pathname: `/posts/${article.slug}`,
        }}
        className="article-link"
      >
        Leer más...
      </Link>
    </div>
  );
};

export { ArticleCard };
