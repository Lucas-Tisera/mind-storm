"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <Logo />
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
