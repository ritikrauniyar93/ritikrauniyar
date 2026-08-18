'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-gradient-to-t from-black via-black/90 to-transparent">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-foreground">Ritik Rauniyar</h2>
          <p className="text-muted mt-1">AI Engineer & IT Head</p>
          <p className="text-muted/60 text-sm mt-1">AI Engineering · Software · Infrastructure</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ritikrauniyar93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-2"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-rauniyar-208758260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:ritikrauniyar93@gmail.com"
            className="text-muted hover:text-foreground transition-colors p-2"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-muted/50">
        © 2026 Ritik Rauniyar
      </div>
    </footer>
  );
}
