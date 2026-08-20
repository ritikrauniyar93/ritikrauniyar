'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, MapPin, Box, Brain, Cloud, Code2, 
  Settings, Users, Server, Zap, ArrowUpRight, Lock, Layers, Database
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { projects } from '@/data/projects';

const storyBlocks = [
  { title: 'Build', desc: 'I build complete digital products across frontend, backend, databases, APIs and mobile.' },
  { title: 'Intelligence', desc: 'I work with AI, automation, data extraction and intelligent internal tools to solve real operational problems.' },
  { title: 'Infrastructure', desc: 'I manage deployment and infrastructure across AWS, Vercel, Cloudflare and production environments.' },
  { title: 'Leadership', desc: 'At KLFPRO, I work across technology decisions, internal systems, infrastructure and engineering delivery.' },
];

const whatIDo = [
  { title: 'ARCHITECT', icon: <Layers size={16} />, desc: 'Design system architecture and technical foundations.' },
  { title: 'BUILD', icon: <Code2 size={16} />, desc: 'Develop frontend, backend, APIs, databases and mobile products.' },
  { title: 'AUTOMATE', icon: <Brain size={16} />, desc: 'Create AI-powered workflows and internal automation.' },
  { title: 'DEPLOY', icon: <Server size={16} />, desc: 'Move systems from local development to production.' },
  { title: 'OPERATE', icon: <Settings size={16} />, desc: 'Maintain infrastructure, applications and internal IT systems.' },
  { title: 'LEAD', icon: <Users size={16} />, desc: 'Drive technical direction and engineering execution.' },
];

export default function About() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Selected projects mapping
  const selectedProjectIds = ['klfpro-crm', 'klfpro-healthcare', 'npi-lead-extractor', 'klfpro-hrms', 'klf-times'];
  const showcaseProjects = selectedProjectIds.map(id => projects.find(p => p.id === id)).filter(Boolean) as typeof projects;

  // Project highlights mapping
  const getProjectHighlights = (id: string) => {
    switch(id) {
      case 'klfpro-crm': return ['Backend', 'Database', 'Cloud', 'Enterprise'];
      case 'klfpro-healthcare': return ['Frontend', 'Product', 'Healthcare'];
      case 'npi-lead-extractor': return ['AI', 'Data', 'Backend'];
      case 'klfpro-hrms': return ['Mobile', 'Backend', 'HR'];
      case 'klf-times': return ['Web', 'Automation', 'Publishing'];
      default: return [];
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px]">
        
        {/* --- SECTION HEADER --- */}
        <ScrollReveal>
          <div className="flex flex-col mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">About</span>
              <div className="h-px w-16 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
            </div>
            <h2 className="text-[clamp(40px,8vw,72px)] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
              <span className="text-white">I build the systems that</span> <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">power modern businesses.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              From architecture to production, I work across AI, software engineering, infrastructure and product development.
            </p>
          </div>
        </ScrollReveal>

        {/* --- TOP ROW: STORY & DNA --- */}
        <div className="flex flex-col xl:flex-row gap-6 md:gap-10 mb-16 md:mb-32">
          
          {/* Left Column: Identity & Professional Story */}
          <div className="xl:w-[45%] flex flex-col gap-6 md:gap-10">
            <ScrollReveal>
              {/* Identity Panel */}
              <div className="p-8 rounded-[24px] bg-[rgba(5,7,14,0.65)] backdrop-blur-[18px] border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Zap size={100} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1 relative z-10">Ritik Rauniyar</h3>
                <p className="text-indigo-400 font-medium mb-6 relative z-10 text-[15px]">AI Engineer</p>
                
                <ul className="space-y-3 mb-8 relative z-10">
                  {['Enterprise Software', 'AI & Automation', 'Cloud Infrastructure', 'Product Engineering'].map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-[13px] text-white/75 font-medium">
                      <CheckCircle2 size={14} className="text-indigo-500/80" />
                      {skill}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 font-bold relative z-10 border-t border-white/5 pt-6">
                  <MapPin size={12} />
                  Based in India
                </div>
              </div>
            </ScrollReveal>

            {/* Story Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {storyBlocks.map((block, i) => (
                <ScrollReveal key={i} delay={0.1 * i}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors h-full">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">{block.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering DNA Visual */}
          <div className="xl:w-[55%] min-h-[400px] md:min-h-[500px]">
            <ScrollReveal delay={0.2} className="h-full">
              <div className="h-full rounded-[24px] bg-[rgba(5,7,14,0.65)] backdrop-blur-[18px] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <h4 className="absolute top-8 left-8 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80">Engineering DNA</h4>
                
                {/* Visual DNA Map */}
                <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center mt-6">
                  
                  {/* Central Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-20 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-black border border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                  >
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Ritik</span>
                    <span className="text-[9px] text-indigo-400 font-medium tracking-wider">Engineering</span>
                  </motion.div>

                  {/* Connecting Lines & Orbiting Nodes */}
                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 400">
                    <motion.circle cx="200" cy="200" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    
                    {/* Top Left - AI */}
                    <motion.line x1="200" y1="200" x2="115" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    {/* Top Right - SOFTWARE */}
                    <motion.line x1="200" y1="200" x2="285" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    {/* Left - DATA */}
                    <motion.line x1="200" y1="200" x2="80" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    {/* Right - CLOUD */}
                    <motion.line x1="200" y1="200" x2="320" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    {/* Bottom Left - PRODUCT */}
                    <motion.line x1="200" y1="200" x2="115" y2="285" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                    {/* Bottom Right - IT */}
                    <motion.line x1="200" y1="200" x2="285" y2="285" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                  </svg>

                  {/* The Nodes */}
                  <div className="absolute top-[85px] left-[85px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Brain size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">AI</span>
                  </div>

                  <div className="absolute top-[85px] right-[85px] translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Code2 size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">Software</span>
                  </div>

                  <div className="absolute top-[200px] left-[50px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Database size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">Data</span>
                  </div>

                  <div className="absolute top-[200px] right-[50px] translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Cloud size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">Cloud</span>
                  </div>

                  <div className="absolute bottom-[85px] left-[85px] -translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Box size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">Product</span>
                  </div>

                  <div className="absolute bottom-[85px] right-[85px] translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-indigo-400 hover:scale-110 transition-all hover:bg-white/10 hover:border-indigo-500/30">
                      <Settings size={18} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 mt-2">IT</span>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* --- WHAT I ACTUALLY DO --- */}
        <div className="mb-20 md:mb-32">
          <ScrollReveal>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6 text-center md:text-left">What I Actually Do</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {whatIDo.map((item, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div className="flex flex-col h-full border-t border-white/10 pt-4 md:pt-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-white/30 group-hover:text-indigo-400 transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-widest">{item.title}</h4>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* --- SYSTEMS I'VE BUILT --- */}
        <div className="mb-20 md:mb-32">
          <ScrollReveal>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 mb-6 text-center md:text-left">Systems I&apos;ve Built</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {showcaseProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={0.05 * i}>
                <div 
                  className="flex flex-col h-full p-5 rounded-[20px] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <h5 className="text-[13px] font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors truncate">{project.title}</h5>
                  <p className="text-[11px] text-muted-foreground mb-5 line-clamp-2 min-h-[34px]">{project.shortDescription}</p>
                  
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 mb-5 bg-black/40">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-700" 
                    />
                    
                    {/* Hover Highlights Overlay */}
                    <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-4 gap-2 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                      {getProjectHighlights(project.id).map(hl => (
                        <span key={hl} className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[11px] font-medium text-white/50">
                      {project.links.live ? 'Visit Website' : 'Private System'}
                    </span>
                    {project.links.live ? (
                      <ArrowUpRight size={14} className="text-white/40 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    ) : (
                      <Lock size={12} className="text-white/20" />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* --- ENGINEERING PHILOSOPHY --- */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center py-12 md:py-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            
            <h3 className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white/90 leading-[1.3]">
              &quot;Good software is not just code. <br className="hidden md:block" />
              <span className="text-white/50">It is architecture, reliability, experience and execution working together.</span>&quot;
            </h3>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
