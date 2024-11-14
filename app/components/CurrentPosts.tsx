"use client";
import Link from "next/link";
import { Post } from "../types/post";
import { motion } from "motion/react";

const CurrentPosts = (post: Post) => {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{ duration: 0.1 }}
      whileTap={{ scale: 0.5 }}
      className="article-card"
    >
      <h2 className="article-title">{post.title}</h2>
      <p className="article-category">{post.category}</p>
      <p className="article-date">{post.created_at}</p>
      <Link
        href={{
          pathname: `/posts/${post.id}`,
        }}
        className="article-link"
      >
        Leer más...
      </Link>
    </motion.div>
  );
};

export { CurrentPosts };
