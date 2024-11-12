interface SidebarProps {
  categories: string[];
}

const Sidebar = ({ categories }: SidebarProps) => {
  return (
    <div className="sidebar">
      <h3>Categorías</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
