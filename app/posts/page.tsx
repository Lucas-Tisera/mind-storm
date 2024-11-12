import Link from "next/link";
import { getAllPosts } from "../lib/posts";

const Post = () => {
  const searchTerm = "";
  const posts = getAllPosts();
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="posts-container">
      <h1>All Posts</h1>
      <ul className="posts-list">
        {filteredPosts
          ? filteredPosts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/posts/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="post-meta">
                  {post.date} | By {post.author} | Category: {post.category}
                </p>
              </li>
            ))
          : posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/posts/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="post-meta">
                  {post.date} | By {post.author} | Category: {post.category}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Post;
