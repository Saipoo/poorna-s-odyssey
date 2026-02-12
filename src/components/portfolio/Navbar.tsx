import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Summary", href: "#summary" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");

  const handleClick = (href: string) => {
    setActiveItem(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-cyan-400 tracking-widest">
          APS
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-3 py-1.5 rounded-full text-sm tracking-wide transition-all duration-300 ${
                activeItem === item.href
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,255,200,0.2)]"
                  : "text-cyan-200/60 hover:text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/60 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeItem === item.href
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                      : "text-cyan-200/60 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
