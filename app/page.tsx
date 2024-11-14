import { ArticleCard } from "./components/ArticleCard";
import { WelcomeSign } from "./components/WelcomeSign";
import { getAllPosts } from "./lib/posts";
import { NavigationDown } from "./components/NavigationDown";

const Home = async () => {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3);
  return (
    <main>
      <NavigationDown />
      <WelcomeSign />
      <section id="latests" className="recent-posts-container">
        <h1 className="home-title">Aqui tienes los ultimos posts:</h1>
        <div className="articles-list">
          {recentPosts.map((post) => (
            <ArticleCard key={post.slug} article={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
