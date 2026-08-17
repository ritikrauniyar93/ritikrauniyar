'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mobileMenuVariants, mobileMenuItemVariants } from '@/lib/animations';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(({ href }) => {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-surface/80 backdrop-blur-md border-b border-white/6 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground tracking-tight z-50">
          Ritik Rauniyar
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-foreground relative',
                    activeSection === link.href.substring(1) ? 'text-foreground' : 'text-muted'
                  )}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-surface/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={mobileMenuItemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={mobileMenuItemVariants}>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-8 py-3 text-lg font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                  >
                    Resume
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
