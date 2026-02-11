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

interface NavbarProps {
  onSimulate: () => void;
}

const Navbar = ({ onSimulate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-cyan-400 tracking-widest">
          POORNA<span className="text-emerald-400">.DEV</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onSimulate}
            className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,255,200,0.4)] transition-shadow"
          >
            ▶ Simulate
          </button>
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
            className="md:hidden bg-black/80 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-cyan-200/70 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); onSimulate(); }}
                className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-sm font-bold rounded-full"
              >
                ▶ Simulate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
