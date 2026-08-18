'use client'

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  
  const email = "ritikrauniyar93@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 md:py-40 text-center relative overflow-hidden bg-black/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/5 mix-blend-screen blur-[120px] w-96 h-96 rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s build something meaningful.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you have a project proposal, a technical challenge, or just want to connect — I&apos;d love to hear from you.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center bg-white text-black font-medium rounded-full h-12 px-8 hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Say Hello
            </a>
            <a 
              href="https://linkedin.com/in/ritikrauniyar93"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full h-12 px-8 transition-colors w-full sm:w-auto"
            >
              Connect on LinkedIn
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/ritikrauniyar93" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-surface border border-white/6 hover:border-white/20 hover:text-foreground text-muted-foreground transition-all group"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/ritikrauniyar93" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-surface border border-white/6 hover:border-white/20 hover:text-foreground text-muted-foreground transition-all group"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <button 
              onClick={handleCopyEmail}
              className="p-3 rounded-full bg-surface border border-white/6 hover:border-white/20 hover:text-foreground text-muted-foreground transition-all group relative"
              aria-label="Copy Email"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Mail size={20} className="group-hover:scale-110 transition-transform" />}
              
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-foreground text-xs px-2 py-1 rounded border border-white/10">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
