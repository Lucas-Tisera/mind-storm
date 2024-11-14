"use client";
import { PostCard } from "./components/PostCard";
import { WelcomeSign } from "./components/WelcomeSign";
import { NavigationDown } from "./components/NavigationDown";
import { useFetchPosts } from "./hooks/useFetchPosts";

const Home = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const recentPosts = posts.slice(0, 3);
  return (
    <main>
      <NavigationDown />
      <WelcomeSign />
      <section id="latests" className="recent-posts-container">
        <h2 className="home-title">Aqui tienes los ultimos posts:</h2>
        <div className="articles-list">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
