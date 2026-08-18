'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
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
        isScrolled ? 'bg-[#05070f]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
        {/* LEFT: Branding */}
        <a href="#" className="flex items-center gap-3 z-50 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/10 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent tracking-tighter">RR</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[15px] font-semibold text-foreground leading-tight">Ritik Rauniyar</span>
            <span className="text-[12px] font-medium text-muted-foreground leading-tight">AI Engineer & IT Head</span>
          </div>
        </a>

        {/* CENTER: Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-[13px] font-medium transition-colors hover:text-foreground relative rounded-full',
                    activeSection === link.href.substring(1) ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: Resume & Mobile Menu */}
        <div className="flex items-center gap-4 z-50">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] border border-white/10 hover:scale-105"
          >
            Resume <ArrowDownToLine size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-foreground bg-white/5 border border-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-[#030508]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center border-b border-white/10"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={mobileMenuItemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-medium text-foreground/80 hover:text-white transition-colors"
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
                    className="mt-6 flex items-center gap-2 px-8 py-3 text-lg font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full"
                  >
                    Resume <ArrowDownToLine size={18} />
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
