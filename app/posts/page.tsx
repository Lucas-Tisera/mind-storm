"use client";
import Link from "next/link";
import { useFetchPosts } from "../hooks/useFetchPosts";
const Post = () => {
  const searchTerm = "";

  const { posts, loading, error } = useFetchPosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
              <li key={post.id} className="post-item">
                <Link href={`/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="post-meta">
                  {post.created_at} | By {post.author} | Category:{" "}
                  {post.category}
                </p>
              </li>
            ))
          : posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="post-meta">
                  {post.created_at} | By {post.author} | Category:{" "}
                  {post.category}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Post;
