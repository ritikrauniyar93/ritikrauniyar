'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Monitor, Server, Database, Brain, Cloud, Rocket, 
  Smartphone, Code2, Layers, Terminal, ArrowRight
} from 'lucide-react';
import { projects } from '@/data/projects';
import ScrollReveal from '@/components/ui/ScrollReveal';

// --- DATA ---
const capabilities = [
  { title: 'Full-Stack', subtitle: 'Engineering', icon: <Layers size={18} /> },
  { title: 'End-to-End', subtitle: 'Product Builder', icon: <Code2 size={18} /> },
  { title: 'Cloud', subtitle: 'Native', icon: <Cloud size={18} /> },
  { title: 'Production', subtitle: 'Focused', icon: <Rocket size={18} /> },
];

const coreNodes = [
  { id: 'frontend', title: 'FRONTEND', desc: 'User Interfaces & Experiences', tech: ['Next.js', 'React', 'TypeScript'], icon: <Monitor size={24} /> },
  { id: 'backend', title: 'BACKEND', desc: 'APIs & Business Logic', tech: ['FastAPI', 'Flask', 'Node.js'], icon: <Server size={24} /> },
  { id: 'database', title: 'DATABASE', desc: 'Data Storage & Management', tech: ['PostgreSQL', 'SQLite'], icon: <Database size={24} /> },
  { id: 'ai', title: 'AI / AUTOMATION', desc: 'Intelligence & Automation', tech: ['Python', 'AI APIs', 'Processing'], icon: <Brain size={24} /> },
  { id: 'cloud', title: 'CLOUD', desc: 'Infrastructure & Deployment', tech: ['AWS', 'Vercel', 'Cloudflare'], icon: <Cloud size={24} /> },
  { id: 'production', title: 'PRODUCTION', desc: 'Delivery & Operations', tech: ['GitHub', 'Docker', 'Monitoring'], icon: <Rocket size={24} /> },
];

const techCategories = [
  { id: 'cat-ai', title: 'AI & AUTOMATION', icon: <Brain size={20} />, tech: ['Python', 'AI APIs', 'Automation', 'Data Processing'] },
  { id: 'cat-front', title: 'FRONTEND', icon: <Monitor size={20} />, tech: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { id: 'cat-back', title: 'BACKEND', icon: <Server size={20} />, tech: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Express'] },
  { id: 'cat-mob', title: 'MOBILE', icon: <Smartphone size={20} />, tech: ['Flutter', 'Dart'] },
  { id: 'cat-db', title: 'DATABASE', icon: <Database size={20} />, tech: ['PostgreSQL', 'SQLite'] },
  { id: 'cat-cloud', title: 'CLOUD & DEVOPS', icon: <Cloud size={20} />, tech: ['AWS', 'Vercel', 'Cloudflare', 'GitHub Actions', 'Docker'] },
  { id: 'cat-tools', title: 'DEVELOPER TOOLS', icon: <Terminal size={20} />, tech: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'] },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Helper to determine opacity based on hover state
  const getOpacity = (techList: string[], categoryId: string) => {
    if (!hoveredTech) return 'opacity-100';
    // Define relationships
    const isRelated = techList.some(t => t.toLowerCase().includes(hoveredTech.toLowerCase())) || 
                      categoryId.toLowerCase().includes(hoveredTech.toLowerCase());
    return isRelated ? 'opacity-100 ring-2 ring-indigo-500/50 scale-[1.02]' : 'opacity-30 grayscale-[50%]';
  };

  const displayProjects = projects.filter(p => p.isProfessional).slice(0, 6);

  return (
    <section id="stack" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px]">
        
        {/* --- HEADER ROW --- */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-10">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">My Toolkit</span>
                <div className="h-px w-16 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight mb-6 leading-none">
                Technical <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The technologies I use to design, build and operate production systems.
              </p>
            </div>
          </ScrollReveal>

          {/* Top Capability Bar */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 p-2 bg-[#05070f]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="text-indigo-400/80">{cap.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground leading-tight">{cap.title}</span>
                    <span className="text-[11px] font-medium text-white leading-tight">{cap.subtitle}</span>
                  </div>
                  {i < capabilities.length - 1 && <div className="hidden md:block w-px h-8 bg-white/10 ml-4" />}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* --- MAIN LAYOUT (ASYMMETRIC) --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-24">
          
          {/* ENGINEERING CORE (LEFT - 7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:col-span-7 bg-[rgba(8,10,18,0.7)] backdrop-blur-[18px] border border-white/10 rounded-[32px] p-8 md:p-10 relative overflow-hidden group"
          >
            {/* Subtle Core Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="flex items-center gap-3 mb-12">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Engineering Core</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            {/* Core Nodes Container */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 lg:gap-4 relative z-10">
              
              {/* Connection Line (Desktop) */}
              <div className="hidden md:block absolute top-[40px] left-[50px] right-[50px] h-px bg-white/10 -z-10 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {coreNodes.map((node, i) => (
                <div 
                  key={node.id} 
                  className={`flex flex-col items-center md:w-32 transition-all duration-500 ${getOpacity(node.tech, node.id)}`}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#0a0c14]/80 backdrop-blur-md border border-white/10 rounded-2xl mb-4 group-hover:border-indigo-500/30 transition-colors shadow-xl">
                    <div className="text-indigo-400">{node.icon}</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[11px] font-bold text-white mb-1 tracking-wider">{node.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-tight mb-3 px-2 h-6">{node.desc}</p>
                    <div className="flex flex-col gap-1">
                      {node.tech.map(t => (
                        <span 
                          key={t} 
                          onMouseEnter={() => setHoveredTech(t)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className="text-[10px] font-medium px-2 py-0.5 bg-white/5 border border-white/5 rounded text-foreground/80 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-500/30 cursor-pointer transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Mobile Down Arrow */}
                  {i < coreNodes.length - 1 && (
                    <div className="md:hidden w-px h-6 bg-gradient-to-b from-indigo-500/50 to-transparent my-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Flow Footer */}
            <div className="mt-16 flex items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs font-mono text-muted-foreground">
              {['Design', 'Develop', 'Deploy', 'Operate', 'Scale'].map((step, i) => (
                <React.Fragment key={step}>
                  <span className="tracking-widest uppercase">{step}</span>
                  {i < 4 && <ArrowRight size={12} className="text-indigo-500/50" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* TECHNOLOGY CARDS (RIGHT - 5 Cols) */}
          <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-[rgba(8,10,18,0.6)] backdrop-blur-[18px] border border-white/10 rounded-[20px] p-6 hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300 group ${
                  i === 0 || i === techCategories.length - 1 ? 'sm:col-span-2' : ''
                } ${getOpacity(cat.tech, cat.title)}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-indigo-400/70 group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)] transition-all">
                      {cat.icon}
                    </div>
                    <h4 className="text-xs font-bold tracking-widest text-white">{cat.title}</h4>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    {cat.tech.map(t => (
                      <span 
                        key={t} 
                        onMouseEnter={() => setHoveredTech(t)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="text-sm text-muted-foreground hover:text-white transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* --- BUILT WITH THIS STACK --- */}
        <ScrollReveal>
          <div className="border-t border-white/10 pt-16">
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-2">Built With This Stack</h3>
              <p className="text-muted-foreground">Real projects. Real systems. Real impact.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {displayProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col group rounded-2xl bg-[#0a0c14]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-indigo-400/80">0{i + 1}</span>
                      <span className="text-[8px] uppercase font-bold tracking-wider text-muted-foreground">{project.category}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {project.shortDescription}
                    </p>
                    
                    {/* Small visual thumbnail */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 bg-black/50">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.techStack.slice(0, 3).map(t => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-sm bg-white/5 text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Subtle Footer CTA */}
                  <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors">
                    <span className="text-[10px] font-medium text-white/50 group-hover:text-white/80 transition-colors">
                      {project.links.live ? 'Visit Website' : 'Case Study'}
                    </span>
                    <ArrowRight size={12} className="text-white/30 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
