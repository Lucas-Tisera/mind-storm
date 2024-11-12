import { Article } from "./types/article";
import { ArticleCard } from "./components/ArticleCard";
import Sidebar from "./components/Sidebar";

async function fetchArticles(): Promise<Article[]> {
  // Aquí puedes obtener datos desde una API o una base de datos
  return [
    {
      title: "Cómo empezar con React",
      slug: "como-empezar-react",
      category: "React",
    },
    {
      title: "Introducción a JavaScript",
      slug: "introduccion-javascript",
      category: "JavaScript",
    },
  ];
}

const Home = async () => {
  const articles = await fetchArticles();

  return (
    <main>
      <h1>Noticias Recientes</h1>
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
};

export default Home;
