import { getPostBySlug } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { BackIcon } from "@/app/svg/BackIcon";
import Link from "next/link";

const md = new MarkdownIt();

const Post = async ({ params }: { params: Record<string, string> }) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <>
      <Link href={"/posts"} className="go-back">
        <BackIcon />
      </Link>
      <div className={"post-container"}>
        <h1 className={"post-title"}>{post.title}</h1>
        <p className={"post-meta"}>
          <span>By {post.author}</span> | <span>{post.date}</span>
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
