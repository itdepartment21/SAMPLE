import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/#programs" },
    { name: "Membership", path: "/pricing" },
    { name: "Coaches", path: "/#coaches" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Dumbbell className="h-8 w-8 text-brand-primary transition-transform group-hover:rotate-12" />
            <span className="font-heading text-3xl tracking-wider text-brand-light">
              ONYX<span className="text-brand-primary">FIT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path.startsWith("/") && link.path.includes("#") ? link.path : link.path}
                className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-primary transition-colors"
                onClick={(e) => {
                  if (link.path.startsWith("/") && !link.path.includes("#")) {
                     // For regular routing, let React Router Link handle it if we used Link, but we are using <a> for simplicity with anchors.
                     // Actually better to use Link for non-anchors.
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Free Trial</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-light hover:text-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-gray border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-lg font-heading tracking-widest text-brand-light hover:text-brand-primary py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4">Start Free Trial</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
