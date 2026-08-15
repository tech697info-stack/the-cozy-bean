import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const navLinks = [
  { name: 'Home', href: '#top' },
  { name: 'Our Story', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href, name) => {
    e.preventDefault();
    setActiveSection(name);
    setMobileMenuOpen(false);

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className={`glass-panel px-6 py-3 flex items-center justify-between rounded-full transition-all duration-300 ${isScrolled ? 'bg-warm-cream/10 shadow-glass' : 'bg-transparent border-transparent shadow-none'}`}>
          
          <a href="#top" onClick={(e) => scrollToSection(e, '#top', 'Home')} className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-gradient font-serif">The Cozy Bean</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.name)}
                className="relative text-warm-cream/80 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-glow rounded-full shadow-glow"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#reservation" onClick={(e) => scrollToSection(e, '#reservation', '')}>
               <GlowButton>Reserve a Table</GlowButton>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-lg p-2 rounded-lg ${activeSection === link.name ? 'bg-warm-cream/10 text-amber-glow' : 'text-warm-cream/80'}`}
                onClick={(e) => scrollToSection(e, link.href, link.name)}
              >
                {link.name}
              </a>
            ))}
            <a href="#reservation" onClick={(e) => scrollToSection(e, '#reservation', '')}>
               <GlowButton className="w-full mt-4">Reserve a Table</GlowButton>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;