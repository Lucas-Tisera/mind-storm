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
    <div className="post-card">
      <div className="post-title-container">
        <h2 className="post-title">{post.title[language]}</h2>
        <p className="post-resume">{post.resume[language]}</p>
      </div>
      <div className="read-more-container">
        <div className="post-information">
          <p className="post-date">{post.created_at}</p>
          <p className="post-category">{post.category}</p>
        </div>
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
              pathname: `/posts/${post.id}`,
            }}
          >
            <Image
              src={ChevronRight}
              alt={"read about " + post.slug}
              className="chevron-right"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export { PostCard };