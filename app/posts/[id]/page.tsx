"use client";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { NavigationBack } from "@/app/components/NavigationBack";
import { useFetchPostById } from "@/app/hooks/useFetchPostById";
import { use } from "react";
import { Loading } from "@/app/components/Loading";
import { Error } from "@/app/components/Error";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";

const md = new MarkdownIt();

interface PostParams {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: any;
}

const Post = ({ params }: PostParams) => {
  const { id } = use<{ id: string }>(params);
  const { post, loading, error } = useFetchPostById(parseInt(id));
  const { locals } = useLanguage();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <motion.section
      className="post-layout"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="post-container"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <NavigationBack />
        <motion.div
          className="post-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="author">
            {locals.post.prefix} {post.author}
          </span>
          <span className="date">{post.created_at}</span>
        </motion.div>

        <motion.article
          className="post-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: htmlConverter }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Post;
