"use client";
import Link from "next/link";
import { Post } from "../types/post";
import ChevronRight from "../svg/chevronRight.svg";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Link
        href={{
          pathname: `/posts/${post.id}`,
        }}
        className="post-card"
      >
        <div className="post-title-container">
          <h2 className="post-title">{post.title[language]}</h2>
          <p className="post-resume">{post.resume[language]}</p>
        </div>
        <div className="read-more-container">
          <div className="post-information">
            <p className="post-date">{post.created_at}</p>
            <p className="post-category">{post.category}</p>
          </div>

          <Image
            src={ChevronRight}
            alt={"read about " + post.slug}
            className="chevron-right"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export { PostCard };
