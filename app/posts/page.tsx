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
              <Link
                href={`/posts/${post.id}`}
                key={post.slug}
                className="post-item"
              >
                <h2>{post.title}</h2>
                <div>
                  <p className="post-meta">{post.created_at}</p>
                  <p className="post-meta">Category: {post.category}</p>
                </div>
              </Link>
            ))
          : posts.map((post) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.slug}
                className="post-item"
              >
                <h2>{post.title}</h2>
                <div>
                  <p className="post-meta">{post.created_at}</p>
                  <p className="post-meta">Category: {post.category}</p>
                </div>
              </Link>
            ))}
      </ul>
    </div>
  );
};

export default Post;
