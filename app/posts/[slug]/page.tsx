const Post = async () => {
  // Aquí obtienes el artículo, simulando que haces una llamada a una API o base de datos
  const article = {
    title: "Cómo empezar con React",
    content: "Contenido del artículo...",
    category: "React",
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Post;
