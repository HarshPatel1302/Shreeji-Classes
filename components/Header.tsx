"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  // On home page, use transparent header when not scrolled; on other pages, always use white background
  const headerBgClass = isHomePage && !isScrolled
    ? "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
    : "bg-white/95 backdrop-blur-md shadow-lg";

  return (
    <motion.header
      // Render visible immediately on the server so the page doesn't appear blank
      initial={false}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link 
              href="/" 
              className={`text-2xl font-bold font-poppins ${
                isHomePage && !isScrolled
                  ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              }`}
            >
              SHREEJI CLASSES
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isHomePage && !isScrolled
                    ? "text-white hover:text-yellow-300"
                    : "text-gray-700 hover:text-blue-600"
                } font-medium transition-colors duration-200 relative group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                  isHomePage && !isScrolled ? "bg-yellow-300" : "bg-blue-600"
                } transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:7738758295"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isHomePage && !isScrolled
                  ? "text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Phone size={18} />
              <span className="font-medium">Call</span>
            </motion.a>
            <motion.a
              href="https://wa.me/917738758295"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={18} />
              <span className="font-medium">WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                isHomePage && !isScrolled ? "text-white" : "text-gray-700"
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t">
                <a
                  href="tel:7738758295"
                  className="flex items-center space-x-2 text-blue-600 font-medium"
                >
                  <Phone size={18} />
                  <span>Call: 7738758295</span>
                </a>
                <a
                  href="https://wa.me/917738758295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600 font-medium"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

