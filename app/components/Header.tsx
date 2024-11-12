"use client";
import { MountainIcon } from "@/app/svg/MountainIcon";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
        </Link>
      </div>
      <div className={`search-bar ${path !== "/posts" ? "deactivated" : ""}`}>
        <input type="text" placeholder="Buscar..." />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link className={path === "/" ? "selected" : ""} href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={path === "/posts" ? "selected" : ""} href="/posts">
            Artículos
          </Link>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export { Header };
