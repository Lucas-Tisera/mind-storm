"use client";
import { PostCard } from "./components/PostCard";
import { WelcomeSign } from "./components/WelcomeSign";
import { NavigationDown } from "./components/NavigationDown";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { useLanguage } from "./contexts/LanguageContext";
const Home = () => {
  const { posts, loading, error } = useFetchPosts();
  const { locals } = useLanguage();
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      <NavigationDown />
      <WelcomeSign />
      <section id="latests" className="recent-posts-container">
        <h2 className="home-title">{locals?.home.latestPosts}</h2>
        <div className="posts-list">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
