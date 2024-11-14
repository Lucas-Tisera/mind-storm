"use client";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { NavigationBack } from "@/app/components/NavigationBack";
import { useFetchPostById } from "@/app/hooks/useFetchPostById";
import { use } from "react";

const md = new MarkdownIt();

interface PostParams {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: any;
}
const Post = ({ params }: PostParams) => {
  const { id } = use<{ id: string }>(params);
  const { post, loading, error } = useFetchPostById(parseInt(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <>
      <NavigationBack />
      <div className={"post-container"}>
        <h1 className={"post-title"}>{post.title}</h1>
        <p className={"post-meta"}>
          <span>By {post.author}</span> | <span>{post.created_at}</span>
        </p>
        <article
          className={"post-content"}
          dangerouslySetInnerHTML={{ __html: htmlConverter }}
        ></article>
      </div>
    </>
  );
};

export default Post;
