"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useSearch } from "../contexts/SearchContext";
import { useLanguage } from "../contexts/LanguageContext";
import { EnglandFlag, SpainFlag } from "../svg/Flags";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { useScroll } from "../hooks/useScroll";

const Header = () => {
  const { position } = useScroll();
  const { searchQuery, setSearchQuery } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { locals, language, setLanguage } = useLanguage();
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const searchVariants = {
    focus: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    blur: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const flagVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{
        opacity:
          position.y > 0 || path === "/posts" || path === "/login" ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{
        pointerEvents: position.y > 0 || path === "/posts" ? "all" : "none",
      }}
    >
      <Logo />
      <div className={`search-bar ${path !== "/posts" ? "deactivated" : ""}`}>
        <motion.input
          variants={searchVariants}
          initial="blur"
          whileFocus="focus"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder={locals.navigation?.search}
        />
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.ul
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <li>
              <Link
                className={path === "/" ? "selected" : ""}
                href="/"
                onClick={handleNavigation}
              >
                {locals.navigation?.home}
              </Link>
            </li>
            <li>
              <Link
                className={path === "/posts" ? "selected" : ""}
                href="/posts"
                onClick={handleNavigation}
              >
                {locals.navigation?.posts}
              </Link>
            </li>
            <li className="language-selector">
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "es" : "en");
                }}
                className="language-button"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={language}
                    variants={flagVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {language === "en" ? <EnglandFlag /> : <SpainFlag />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </li>
          </motion.ul>
        ) : (
          <ul className="nav-links">
            <li>
              <Link className={path === "/" ? "selected" : ""} href="/">
                {locals.navigation?.home}
              </Link>
            </li>
            <li>
              <Link
                className={path === "/posts" ? "selected" : ""}
                href="/posts"
              >
                {locals.navigation?.posts}
              </Link>
            </li>
            <li className="language-selector">
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "es" : "en");
                }}
                className="language-button"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={language}
                    variants={flagVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {language === "en" ? <EnglandFlag /> : <SpainFlag />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </li>
          </ul>
        )}
      </AnimatePresence>
      <motion.button
        className="menu-toggle"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMenuOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  );
};

export { Header };
