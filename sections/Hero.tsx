'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { heroStagger, heroChild } from '@/lib/animations';
import { Code2, Server, Brain, Database, Cloud } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const nodes = [
    { icon: Code2, label: 'Frontend', color: 'text-blue-400', title: 'Layer 01' },
    { icon: Server, label: 'API Layer', color: 'text-green-400', title: 'Active' },
    { icon: Brain, label: 'AI Engine', color: 'text-indigo-500', title: 'Layer 03' },
    { icon: Database, label: 'Database', color: 'text-amber-400', title: 'Active' },
    { icon: Cloud, label: 'Cloud', color: 'text-violet-400', title: 'Layer 05' },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={heroStagger}
          initial="initial"
          animate="animate"
          className="max-w-2xl bg-gradient-to-r from-black/60 to-transparent p-6 rounded-2xl backdrop-blur-sm"
        >
          <motion.div variants={heroChild} className="inline-flex items-center text-xs font-mono text-muted-foreground bg-surface border border-white/6 px-3 py-1.5 rounded-lg mb-6">
            <span className="text-accent mr-2">const</span> role = &quot;AI Engineer&quot;
          </motion.div>
          
          <motion.h1 variants={heroChild} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] mb-6">
            Building intelligent<br/>software &amp; systems.
          </motion.h1>
          
          <motion.p variants={heroChild} className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
            I architect enterprise platforms, AI pipelines, and cloud infrastructure — from database to deployment.
          </motion.p>
          
          <motion.div variants={heroChild} className="flex flex-wrap items-center gap-4 mb-10">
            <Link href="#projects" className="inline-flex items-center justify-center bg-white text-black font-medium rounded-full h-12 px-7 hover:bg-white/90 transition-colors">
              Explore My Work
            </Link>

          </motion.div>
          
          <motion.div variants={heroChild} className="flex items-center gap-6">
            <a href="https://github.com/ritikrauniyar93" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/ritikrauniyar93" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="hidden lg:block relative" style={{ perspective: '1000px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/5 blur-[100px] w-64 h-64 rounded-full pointer-events-none" />
          
          <motion.div 
            className="relative flex flex-col gap-6 w-full max-w-md mx-auto"
            style={{ 
              transform: `rotateY(-5deg) rotateX(3deg) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {nodes.map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="relative flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-xl z-10"
              >
                <div className={`p-2 rounded-lg bg-white/5 ${node.color}`}>
                  <node.icon size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium">{node.label}</div>
                  <div className="text-xs text-muted-foreground">{node.title}</div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="absolute left-7 top-[100%] h-6 border-l border-dashed border-white/10 connection-line -z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

