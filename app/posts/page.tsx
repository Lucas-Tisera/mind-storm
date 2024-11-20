"use client";
import Link from "next/link";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useSearch } from "../contexts/SearchContext";
import { NotFound } from "../svg/NotFound";
import { useLanguage } from "../contexts/LanguageContext";
const Post = () => {
  const { searchQuery } = useSearch();
  const { language, locals } = useLanguage();

  const { posts, loading, error } = useFetchPosts();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const filteredPosts = posts.filter(
    (post) =>
      post.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="posts-container">
      <h1>{locals.navigation?.posts}</h1>
      <ul className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.slug}
              className="post-item"
            >
              <div>
                <h2>{post.title[language]}</h2>
                <p className="post-resume">{post.resume[language]}</p>
              </div>
              <div className="post-meta-container">
                <p className="post-meta">{post.created_at}</p>
                <p className="post-meta post-category">{post.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <div
            className="no-posts-found"
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <NotFound />
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                letterSpacing: "0.025em",
                marginBottom: "1rem",
                color: "#374151",
              }}
            >
              No hubo ninguna coincidencia
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#6b7280",
                lineHeight: 1.625,
                maxWidth: "28rem",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Intenta buscar con otros términos o navega por las categorías
              disponibles.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Post;
