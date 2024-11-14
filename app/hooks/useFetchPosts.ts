"use client";

import { useState, useEffect } from "react";
import { getPosts } from "../services/posts";
import { Post } from "../types/post";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const transformPosts = posts.map((post) => ({
    ...post,
    created_at: new Date(post.created_at).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

  return { posts: transformPosts, loading, error };
};

export { useFetchPosts };
