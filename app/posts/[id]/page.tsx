"use client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { NavigationBack } from "@/app/components/NavigationBack";
import { useFetchPostById } from "@/app/hooks/useFetchPostById";
import { use } from "react";
import { Loading } from "@/app/components/Loading";
import { Error } from "@/app/components/Error";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CalendarSVG } from "@/app/svg/Calendar";
import Image from "next/image";
import AuthorImage from "@/app/svg/author.jpg";
import { useScroll } from "@/app/hooks/useScroll";

interface PostParams {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: any;
}

const Post = ({ params }: PostParams) => {
  const { id } = use<{ id: string }>(params);
  const { post, loading, error } = useFetchPostById(parseInt(id));
  const { locals } = useLanguage();
  const { position } = useScroll();
  if (loading) {
    return (
      <div className="post-layout" style={{ minHeight: "100vh" }}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="post-layout" style={{ minHeight: "100vh" }}>
        <Error error={error} />
      </div>
    );
  }

  if (!post) notFound();
  const variants = {
    animate: {
      top: `${(position.y / document.documentElement.scrollHeight) * 100}%`,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="scroll-container">
        <motion.div
          className="scroll-indicator"
          variants={variants}
          initial={false}
          animate="animate"
        />
      </div>
      <motion.section
        className="post-layout"
        style={{ minHeight: "100vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="post-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="post-meta">
            <NavigationBack />
            <div className="post-meta-info">
              <span className="author">
                <Image
                  src={AuthorImage}
                  alt={post.author}
                  className="author-image"
                />
                {locals.post.prefix} {post.author}
              </span>
              <span className="date">
                {" "}
                <CalendarSVG />
                {post.created_at}
              </span>
            </div>
          </div>

          <ReactMarkdown className="post-content">{post.content}</ReactMarkdown>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Post;
