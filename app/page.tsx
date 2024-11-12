import { ArticleCard } from "./components/ArticleCard";
import { WelcomeSign } from "./components/WelcomeSign";
import { getAllPosts } from "./lib/posts";

const Home = async () => {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main>
      <WelcomeSign />
      <h1 className="home-title">Aqui tienes los ultimos posts:</h1>
      <div className="articles-list">
        {recentPosts.map((post) => (
          <ArticleCard key={post.slug} article={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
