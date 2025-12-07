import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

interface NavLink {
  name: string;
  path: string;
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity">
          <img src={logo} alt="QuadraBytes Logo" className="w-8 h-8" />
          Quadra<span className="text-brand2">Bytes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative transition group ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-brand2 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Gradient CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-brand1 to-brand2 
          text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl py-6 px-6 text-white space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                location.pathname === link.path ? "text-brand2" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 bg-gradient-to-r from-brand1 to-brand2 
            text-white rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
