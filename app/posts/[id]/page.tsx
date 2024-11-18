"use client";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { NavigationBack } from "@/app/components/NavigationBack";
import { useFetchPostById } from "@/app/hooks/useFetchPostById";
import { use } from "react";
import { Loading } from "@/app/components/Loading";
import { Error } from "@/app/components/Error";
import { useLanguage } from "@/app/contexts/LanguageContext";

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
    <>
      <NavigationBack />
      <div className={"post-container"}>
        <p className={"post-meta"}>
          <span>
            {locals.post.prefix} {post.author}
          </span>
          <span>{post.created_at}</span>
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
