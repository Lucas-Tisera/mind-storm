"use client";
import Link from "next/link";
import { Article } from "../types/article";
import ChevronRight from "../svg/chevronRight.svg";
import Image from "next/image";
import { motion } from "motion/react";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <div>
        <h2 className="article-title">{article.title}</h2>
        <div className="article-information">
          <p className="article-category">{article.category}</p>
          <p className="article-date">{article.date}</p>
        </div>
      </div>
      <div className="read-more-container">
        <motion.div
          whileHover={{
            scale: 1.3,
          }}
          whileTap={{
            scale: 0.7,
          }}
        >
          <Link
            href={{
              pathname: `/posts/${article.slug}`,
            }}
          >
            <Image
              src={ChevronRight}
              alt="Leer mas"
              className="chevron-right"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export { ArticleCard };
