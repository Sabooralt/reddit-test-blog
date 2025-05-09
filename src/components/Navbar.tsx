import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Works", link: "/works" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Content", link: "/content" },
  ];

  return (
    <nav className="relative  bg-primary text-white p-8">
      <div className="flex justify-between items-center">
        <div className="w-[70px]">
          <img
            alt="Main Logo"
            className="size-full"
            src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row space-x-6 text-secondary text-xl font-medium">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <li className="relative flex flex-row cursor-pointer group overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {item.name}
                </span>
                <span>,</span>
                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:translate-y-[-100%]">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            className="flex flex-col justify-between w-8 h-6"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] bg-black transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[0.8rem]" : ""
              }`}
            />
            <span
              className={`h-[2px] bg-black ml-auto transition-all duration-300 ${
                isMobileMenuOpen ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-[2px] bg-black transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[0.55rem]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary overflow-hidden absolute top-20 left-0 px-5 w-full transition-all duration-200 ease-in-out z-20 ${
          isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 font-[500] text-black bg-white p-4 text-lg font-medium">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <li
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
