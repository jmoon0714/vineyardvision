import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const logo = document.getElementById("logo");
      const navItems = document.querySelectorAll(".nav-item");

      if (window.scrollY > 0) {
        header.classList.add("bg-opacity-90", "scrolled");
        header.classList.remove("py-4");
        logo.classList.add("logo-small");

        navItems.forEach((item) => {
          item.classList.remove("nav-item-large");
          item.classList.add("nav-item-small");
        });
      } else {
        header.classList.remove("bg-opacity-90", "scrolled");
        header.classList.add("py-4");
        logo.classList.remove("logo-small");

        navItems.forEach((item) => {
          item.classList.remove("nav-item-small");
          item.classList.add("nav-item-large");
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="header"
      className="sticky top-0 z-20 bg-lightCream dark:bg-darkBlue transition-all duration-300 border-b border-gray-200 dark:border-gray-700 py-4"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <a href="#landing" onClick={handleSmoothScroll}>
            <img
              id="logo"
              src="long_logo.svg"
              className="h-20 logo"
              alt="Vineyard Vision Logo"
            />
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <a
              href="#vision"
              className="nav-item nav-item-large"
              onClick={handleSmoothScroll}
            >
              <span>our</span> <span>vision</span>
            </a>
            <a
              href="#mission"
              className="nav-item nav-item-large"
              onClick={handleSmoothScroll}
            >
              <span>our</span> <span>mission</span>
            </a>
            <a
              href="#team"
              className="nav-item nav-item-large"
              onClick={handleSmoothScroll}
            >
              <span>our</span> <span>team</span>
            </a>
            <a
              href="#news"
              className="nav-item nav-item-large"
              onClick={handleSmoothScroll}
            >
              <span>our</span> <span>news</span>
            </a>
            <a
              href="#technology"
              className="nav-item nav-item-large"
              onClick={handleSmoothScroll}
            >
              <span>our</span> <span>technology</span>
            </a>
          </nav>
          <a
            href="#contact"
            className="text-lightCream bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-primary-700 dark:hover:bg-primary-900 dark:focus:ring-primary-900"
            onClick={handleSmoothScroll}
          >
            Let's Talk!
          </a>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-darkBlue rounded-lg shadow-lg py-1 z-20"
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="block px-4 py-2 text-gray-700 dark:text-lightCream"
                >
                  Contact
                </a>
                <label className="flex items-center px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={handleThemeToggle}
                    className="form-checkbox h-5 w-5 text-primary-700 transition duration-150 ease-in-out"
                  />
                  <span className="ml-3 text-gray-700 dark:text-lightCream">
                    Dark Mode
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
