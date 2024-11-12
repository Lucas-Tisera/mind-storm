import { MountainIcon } from "@/app/svg/MountainIcon";
import Link from "next/link";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/posts">Artículos</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
