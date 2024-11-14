"use client";
import Link from "next/link";
import { Post } from "../types/post";
import ChevronRight from "../svg/chevronRight.svg";
import Image from "next/image";
import { motion } from "motion/react";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="article-card">
      <div>
        <h2 className="article-title">{post.title}</h2>
        <div className="article-information">
          <p className="article-category">{post.category}</p>
          <p className="article-date">{post.created_at}</p>
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
