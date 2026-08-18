'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Box, Brain, Code2, Cloud, Users, ArrowUpRight, Lock, 
  Database, LineChart, FileSpreadsheet, Layout
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';

const capabilities = [
  { title: 'AI Driven', desc: 'Intelligent Solutions', icon: <Brain size={16} /> },
  { title: 'Full-Stack', desc: 'End-to-End Delivery', icon: <Layout size={16} /> },
  { title: 'Cloud Native', desc: 'Scalable & Secure', icon: <Cloud size={16} /> },
  { title: 'Impact Focused', desc: 'Real Business Value', icon: <Box size={16} /> },
];

const engineeringScope = [
  { id: '01', title: 'PRODUCT ENGINEERING', icon: <Box size={18} />, items: ['CRM', 'ERP / FinTech', 'HRMS', 'Healthcare Platforms'] },
  { id: '02', title: 'AI & AUTOMATION', icon: <Brain size={18} />, items: ['AI Workflows', 'Data Extraction', 'Internal Automation', 'Intelligent Tools'] },
  { id: '03', title: 'FULL-STACK DEVELOPMENT', icon: <Code2 size={18} />, items: ['Frontend', 'Backend', 'APIs', 'Database'] },
  { id: '04', title: 'CLOUD & INFRASTRUCTURE', icon: <Cloud size={18} />, items: ['AWS EC2', 'Vercel', 'Cloudflare', 'GitHub'] },
  { id: '05', title: 'IT & TECH LEADERSHIP', icon: <Users size={18} />, items: ['Infrastructure', 'Internal IT', 'Deployment', 'Tech Decisions'] },
];

const progression = [
  { title: 'Data & Analytics', desc: 'Understanding Data', icon: <Database size={16} /> },
  { title: 'Software Development', desc: 'Building Applications', icon: <Code2 size={16} /> },
  { title: 'AI & Automation', desc: 'Intelligent Systems', icon: <Brain size={16} /> },
  { title: 'Engineering Leadership', desc: 'Scalable Architecture', icon: <Users size={16} /> },
  { title: 'IT Leadership', desc: 'Driving Technology', icon: <Cloud size={16} /> },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Flutter', 'AWS', 'Vercel', 'Cloudflare'
];

export default function ExperienceSection() {
  // Select exact projects for the showcase
  const selectedProjectIds = ['klfpro-crm', 'klfpro-healthcare', 'npi-lead-extractor', 'klfpro-hrms', 'klf-times'];
  const showcaseProjects = selectedProjectIds.map(id => projects.find(p => p.id === id)).filter(Boolean) as typeof projects;

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px]">
        
        {/* --- SECTION HEADER --- */}
        <ScrollReveal>
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-20 gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">Experience</span>
                <div className="h-px w-16 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
                Building technology <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">from idea to production.</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                Leading engineering, AI, cloud and enterprise systems that power real-world impact.
              </p>
            </div>

            {/* Top Capability Chips */}
            <div className="grid grid-cols-2 sm:flex flex-wrap gap-3 md:gap-4 p-2 bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-full">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {cap.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white leading-tight">{cap.title}</span>
                    <span className="text-[10px] font-medium text-muted-foreground leading-tight mt-0.5">{cap.desc}</span>
                  </div>
                  {i < capabilities.length - 1 && <div className="hidden sm:block w-px h-8 bg-white/10 ml-2" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* --- MAIN LAYOUT --- */}
        <div className="relative flex flex-col xl:flex-row gap-8 lg:gap-12">
          
          {/* TIMELINE COLUMN (Hidden on very small screens, visible md+) */}
          <div className="hidden md:flex flex-col items-center w-24 relative shrink-0">
            <div className="absolute top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent"></div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="sticky top-32 z-10 flex flex-col items-center gap-4 bg-background py-4"
            >
              {/* Glowing Node */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-indigo-500 bg-background z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping"></div>
              </div>
              <span className="text-[11px] font-bold text-indigo-400 tracking-wider">2025</span>
              <span className="text-[10px] font-medium text-muted-foreground -mt-3 uppercase">Present</span>
            </motion.div>
          </div>

          {/* MAIN CONTENT COLUMN */}
          <div className="flex-1 flex flex-col gap-8 min-w-0">
            
            {/* Mobile Timeline Info */}
            <div className="md:hidden flex items-center gap-4 mb-2">
              <div className="w-4 h-4 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-indigo-400 tracking-wider">2025 — PRESENT</span>
              </div>
            </div>

            {/* --- KLFPRO ENTERPRISE CARD --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[rgba(5,7,14,0.65)] backdrop-blur-[18px] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl relative"
            >
              {/* Top Details */}
              <div className="p-6 md:p-10 border-b border-white/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div>
                    <h3 className="text-3xl md:text-[40px] font-bold text-white tracking-tight mb-2">AI Engineer & IT Head</h3>
                    <span className="text-lg font-semibold text-indigo-400 tracking-wide uppercase">KLFPRO</span>
                  </div>
                  <div className="max-w-md">
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      Leading technology across AI, enterprise software, cloud infrastructure and internal platforms — from architecture and development through deployment and ongoing operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineering Scope */}
              <div className="p-6 md:p-10 bg-white/[0.01] border-b border-white/5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80 mb-6">Engineering Scope</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {engineeringScope.map((scope) => (
                    <div key={scope.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-indigo-400/70 group-hover:text-indigo-400 transition-colors">{scope.icon}</div>
                        <span className="text-[10px] font-mono text-white/30">{scope.id}</span>
                      </div>
                      <h5 className="text-[11px] font-bold text-white leading-tight mb-3 tracking-wide">{scope.title}</h5>
                      <ul className="flex flex-col gap-2">
                        {scope.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[11px] text-muted-foreground group-hover:text-white/80 transition-colors">
                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Systems */}
              <div className="p-6 md:p-10 border-b border-white/5 bg-black/20">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80 mb-6">Selected Systems I Build & Lead</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {showcaseProjects.map((project) => (
                    <div key={project.id} className="flex flex-col p-4 rounded-2xl bg-[#080a12] border border-white/5 hover:border-indigo-500/30 transition-all group overflow-hidden relative">
                      <h5 className="text-[13px] font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors truncate">{project.title}</h5>
                      <p className="text-[10px] text-muted-foreground mb-4 line-clamp-2 min-h-[30px]">{project.shortDescription}</p>
                      
                      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 mb-4 bg-black/50">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
                        <span className="text-[10px] font-medium text-white/60">
                          {project.links.live ? 'Visit Website' : 'Private System'}
                        </span>
                        {project.links.live ? (
                          <ArrowUpRight size={12} className="text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        ) : (
                          <Lock size={10} className="text-white/40" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div className="p-6 md:p-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-[11px] font-medium bg-white/[0.03] border border-white/10 rounded-full text-foreground/80 hover:bg-white/10 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeline Connector for Old Experience */}
            <div className="md:hidden flex items-center gap-4 mt-6 mb-2">
              <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center bg-background">
                <div className="w-1 h-1 rounded-full bg-white/40"></div>
              </div>
              <span className="text-[11px] font-bold text-white/50 tracking-wider">2023</span>
            </div>
            
            {/* --- IBM INTERN CARD --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 mt-4 md:mt-12 relative flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-white/[0.03] transition-colors"
            >
              <div className="hidden md:flex absolute -left-[76px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white/10 bg-background z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              </div>
              <div className="hidden md:block absolute -left-[80px] top-1/2 w-[80px] h-px bg-white/5"></div>

              <div className="md:w-1/3">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Data Analytics Intern</h3>
                <span className="text-sm font-semibold text-white/50 tracking-wide">2023</span>
                <p className="text-[13px] text-muted-foreground mt-4 leading-relaxed">
                  Worked on data analysis, reporting, data processing and analytical workflows to support business insights during early career.
                </p>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <LineChart size={16} className="text-white/40" />
                  <span className="text-[11px] font-medium text-white/70">Data Analysis & Visualization</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Database size={16} className="text-white/40" />
                  <span className="text-[11px] font-medium text-white/70">Data Processing & Cleaning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <Code2 size={16} className="text-white/40" />
                  <span className="text-[11px] font-medium text-white/70">Python & Pandas</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <FileSpreadsheet size={16} className="text-white/40" />
                  <span className="text-[11px] font-medium text-white/70">Analytical Reporting</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CAREER PROGRESSION COLUMN (Right side, hidden on lg and below) */}
          <div className="hidden xl:flex flex-col w-56 shrink-0 pl-8 border-l border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80 mb-10">Career Progression</h4>
            
            <div className="flex flex-col relative">
              <div className="absolute left-[15px] top-4 bottom-8 w-px bg-white/5"></div>
              
              {progression.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="flex items-start gap-4 mb-8 relative group">
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 z-10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                      <div className="text-white/40 group-hover:text-indigo-400 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[11px] font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</span>
                      <span className="text-[10px] font-medium text-muted-foreground mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
