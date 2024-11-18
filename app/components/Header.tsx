"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useSearch } from "../contexts/SearchContext";
import { useLanguage } from "../contexts/LanguageContext";
import { EnglandFlag, SpainFlag } from "../svg/Flags";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locals, language, setLanguage } = useLanguage();
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <Logo />
      <div className={`search-bar ${path !== "/posts" ? "deactivated" : ""}`}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder={locals.navigation?.search}
        />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link className={path === "/" ? "selected" : ""} href="/">
            {locals.navigation?.home}
          </Link>
        </li>
        <li>
          <Link className={path === "/posts" ? "selected" : ""} href="/posts">
            {locals.navigation?.posts}
          </Link>
        </li>
        <li className="language-selector">
          <span className="language-label">{locals.navigation?.language}</span>
          <button
            onClick={() => {
              setLanguage(language === "en" ? "es" : "en");
            }}
            className="language-button"
          >
            {language === "en" ? <EnglandFlag /> : <SpainFlag />}
          </button>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export { Header };
