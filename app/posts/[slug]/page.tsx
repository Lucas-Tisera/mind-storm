import { getPostBySlug } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { NavigationBack } from "@/app/components/NavigationBack";

const md = new MarkdownIt();

interface PostParams {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  params: any;
}
const Post = ({ params }: PostParams) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const htmlConverter = md.render(post.content);

  return (
    <>
      <NavigationBack />
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
