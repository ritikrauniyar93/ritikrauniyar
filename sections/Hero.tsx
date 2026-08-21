'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Brain, Database, Cloud, Shield, 
  Smartphone, Settings, Layout, Zap, ArrowRight,
  MonitorSmartphone, Workflow, Newspaper, Layers, Lock
} from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const architectureCards = [
    { icon: <Code2 size={18} />, title: 'Frontend', layer: 'Layer 01', tech: 'React, Next.js, TypeScript', color: 'text-blue-400', border: 'group-hover:border-blue-500/50' },
    { icon: <Server size={18} />, title: 'API Layer', layer: 'Layer 02', tech: 'FastAPI, REST, GraphQL', color: 'text-emerald-400', border: 'group-hover:border-emerald-500/50' },
    { icon: <Brain size={18} />, title: 'AI Engine', layer: 'Layer 03', tech: 'LLMs, ML, LangChain', color: 'text-purple-400', border: 'group-hover:border-purple-500/50' },
    { icon: <Database size={18} />, title: 'Database', layer: 'Layer 04', tech: 'PostgreSQL, MySQL', color: 'text-amber-400', border: 'group-hover:border-amber-500/50' },
    { icon: <Cloud size={18} />, title: 'Cloud', layer: 'Layer 05', tech: 'AWS, EC2, S3, RDS', color: 'text-sky-400', border: 'group-hover:border-sky-500/50' },
  ];

  const features = [
    { icon: <Shield size={14} />, text: 'ERP & Fintech Platforms' },
    { icon: <Smartphone size={14} />, text: 'Mobile Applications' },
    { icon: <Zap size={14} />, text: 'AI & Automations' },
    { icon: <Workflow size={14} />, text: 'Business Workflows' },
    { icon: <Newspaper size={14} />, text: 'News & Content Platforms' },
  ];

  const stats = [
    { icon: <Zap size={24} />, value: '10+', label: 'Projects', sub: 'Completed' },
    { icon: <Layout size={24} />, value: '2+', label: 'Experience', sub: 'Years' },
    { icon: <Code2 size={24} />, value: '30+', label: 'Technologies', sub: 'Tools & Frameworks' },
    { icon: <MonitorSmartphone size={24} />, value: 'Solutions', label: 'Focus', sub: 'Not Just Code' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden bg-[#03050a] pt-24 lg:pt-28 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 xl:px-8 max-w-[1600px] relative z-10 flex flex-col gap-6 w-full h-full justify-center">
        
        {/* TOP MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,0.95fr)_minmax(280px,0.9fr)_minmax(320px,1.1fr)] xl:grid-cols-[minmax(400px,0.95fr)_minmax(340px,0.9fr)_minmax(420px,1.1fr)] gap-4 xl:gap-6 items-stretch w-full">
          
          {/* ========================================================= */}
          {/* LEFT: MAIN HERO CARD                                      */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between bg-[#080b14]/80 backdrop-blur-[20px] border border-white/10 rounded-[32px] p-6 lg:p-8 xl:p-10 relative overflow-hidden group shadow-2xl min-h-[480px] xl:min-h-[550px]"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
            
            <div>
              {/* Status Pill & Code Icon */}
              <div className="flex items-center justify-between mb-6 xl:mb-8 relative z-10">
                <div className="flex items-center gap-2.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2 xl:h-2.5 xl:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] xl:text-[11px] font-medium text-white/80 tracking-wide">Available for new projects</span>
                </div>
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-blue-400 transition-colors">
                  <Code2 size={16} />
                </div>
              </div>

              {/* Typography */}
              <div className="relative z-10 mb-6 xl:mb-8">
                <h1 
                  className="font-bold tracking-tight leading-[1.05] text-white mb-4 xl:mb-6"
                  style={{ fontSize: 'clamp(46px, 4.5vw, 68px)' }}
                >
                  Building <br />
                  intelligent <br />
                  <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">software &</span><br />
                  systems.
                </h1>
                <p className="text-[13px] md:text-[14px] xl:text-[15px] text-muted-foreground leading-relaxed max-w-sm">
                  I architect enterprise platforms, AI pipelines, and cloud infrastructure — from database to deployment.
                </p>
              </div>
            </div>

            <div>
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 relative z-10 mb-6 xl:mb-8">
                <Link href="#contact" className="flex items-center gap-2 px-5 py-2.5 xl:px-7 xl:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-sm font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105">
                  Start a Project <ArrowRight size={14} />
                </Link>
                <Link href="#projects" className="flex items-center gap-2 px-5 py-2.5 xl:px-7 xl:py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white rounded-xl text-sm font-medium transition-all hover:scale-105">
                  View My Work
                </Link>
              </div>

              {/* Bottom Tech Labels */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 relative z-10 pt-4 xl:pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] xl:text-[12px] font-medium text-white/60 hover:text-blue-400 transition-colors cursor-default">
                  <Brain size={12} /> AI
                </div>
                <div className="flex items-center gap-1.5 text-[11px] xl:text-[12px] font-medium text-white/60 hover:text-purple-400 transition-colors cursor-default">
                  <Layers size={12} /> Full-Stack
                </div>
                <div className="flex items-center gap-1.5 text-[11px] xl:text-[12px] font-medium text-white/60 hover:text-emerald-400 transition-colors cursor-default">
                  <Settings size={12} /> Automation
                </div>
                <div className="flex items-center gap-1.5 text-[11px] xl:text-[12px] font-medium text-white/60 hover:text-sky-400 transition-colors cursor-default">
                  <Cloud size={12} /> Cloud
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER: ARCHITECTURE CARDS                                */}
          {/* ========================================================= */}
          <div className="flex flex-col justify-center h-full gap-2 xl:gap-3 lg:py-2">
            <div className="pl-2 mb-1">
              <span className="text-[8px] xl:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">System Architecture</span>
            </div>
            
            <div className="flex flex-col gap-2 xl:gap-3 flex-1 justify-between">
              {architectureCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`group flex items-center justify-between px-4 py-3 rounded-2xl bg-[#080b14]/60 backdrop-blur-md border border-white/5 hover:bg-[#0c101c]/80 transition-all cursor-default ${card.border} h-full max-h-[85px] xl:max-h-[92px]`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform shadow-lg shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] xl:text-[13px] font-bold text-white/90 group-hover:text-white leading-tight mb-0.5">{card.title}</span>
                      <span className="text-[9px] xl:text-[10px] text-white/50 leading-tight mb-0.5">{card.layer}</span>
                      <span className="text-[8px] xl:text-[9px] text-white/30 leading-tight line-clamp-1">{card.tech}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white/60 group-hover:bg-white/10 transition-all shrink-0">
                    <ArrowRight size={10} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: VISUALIZATION & FEATURES                           */}
          {/* ========================================================= */}
          <div className="flex flex-col h-full gap-4 lg:py-2">
            
            {/* Top Row: Data Analytics & Cloud */}
            <div className="grid grid-cols-2 gap-4 h-[120px] xl:h-[130px] shrink-0">
              {/* Analytics Card */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#080b14]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 relative overflow-hidden group hover:border-blue-500/30 transition-colors h-full flex flex-col justify-between"
              >
                <span className="text-[8px] xl:text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 block">Data Analytics</span>
                <div className="flex items-end justify-between mt-2">
                  {/* Fake Chart SVG */}
                  <div className="w-14 h-8 xl:w-16 xl:h-10 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                      <motion.path 
                        d="M 0 40 L 20 20 L 40 30 L 60 10 L 80 25 L 100 5" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={mounted ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M 0 50 L 0 40 L 20 20 L 40 30 L 60 10 L 80 25 L 100 5 L 100 50 Z" 
                        fill="url(#chartGrad)" 
                        opacity="0.2"
                        initial={{ opacity: 0 }}
                        animate={mounted ? { opacity: 0.2 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Perf Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full border-[3px] border-blue-500/30 border-t-blue-500 flex items-center justify-center text-[9px] xl:text-[10px] font-bold text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      86%
                    </div>
                    <span className="text-[7px] xl:text-[8px] text-white/40 mt-1 uppercase">Performance</span>
                  </div>
                </div>
              </motion.div>

              {/* Cloud Card */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-[#080b14]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center relative group hover:border-sky-500/30 transition-colors h-full"
              >
                <div className="relative mb-2">
                  <Cloud size={24} className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform duration-500" />
                  <Lock size={10} className="absolute -right-1 -bottom-1 text-white/80 bg-[#080b14] rounded-full p-0.5" />
                </div>
                <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-widest text-white/80 text-center leading-tight">Cloud Infrastructure</span>
                <span className="text-[7px] xl:text-[8px] text-white/40 uppercase tracking-[0.2em] mt-1">Scalable • Secure</span>
              </motion.div>
            </div>

            {/* Middle Row: AI Visualization & Features */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 h-full min-h-[160px] xl:min-h-[180px]">
              
              {/* Central AI Chip Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1 bg-[#080b14]/40 backdrop-blur-md border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center h-full"
              >
                {/* Background Grid & Lines */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
                
                {/* Animated Glowing Traces */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="none">
                  <motion.path d="M0,50 L80,50 L100,100" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 4" 
                    initial={{ strokeDashoffset: 100 }} animate={mounted ? { strokeDashoffset: 0 } : {}} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} opacity="0.5" />
                  <motion.path d="M200,150 L120,150 L100,100" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="4 4" 
                    initial={{ strokeDashoffset: -100 }} animate={mounted ? { strokeDashoffset: 0 } : {}} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} opacity="0.5" />
                  <motion.path d="M100,0 L100,80" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4" 
                    initial={{ strokeDashoffset: 100 }} animate={mounted ? { strokeDashoffset: 0 } : {}} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} opacity="0.5" />
                  <motion.path d="M100,200 L100,120" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4" 
                    initial={{ strokeDashoffset: -100 }} animate={mounted ? { strokeDashoffset: 0 } : {}} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} opacity="0.5" />
                </svg>

                {/* The Chip */}
                <div className="relative z-10 w-20 h-20 bg-[#0a0f1d] border border-indigo-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                  <div className="absolute inset-0 rounded-2xl border border-blue-400/30 m-1"></div>
                  <div className="absolute inset-0 rounded-2xl border border-purple-400/20 m-2"></div>
                  <span className="text-2xl font-black bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">AI</span>
                  
                  {/* Orbiting dots */}
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px]"
                    animate={{ rotate: 360, x: 35 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full blur-[1px]"
                    animate={{ rotate: -360, x: -35 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-full sm:w-[170px] xl:w-48 bg-[#080b14]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-full"
              >
                <span className="text-[8px] xl:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2 block">Building</span>
                <div className="flex flex-col gap-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 group">
                      <div className="text-indigo-400/50 group-hover:text-indigo-400 transition-colors shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-[9px] xl:text-[10px] font-medium text-white/70 group-hover:text-white transition-colors leading-tight">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM STAT STRIP                                         */}
        {/* ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full bg-[#080b14]/80 backdrop-blur-[20px] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl relative overflow-hidden shrink-0 mt-2"
        >
          {/* Subtle line glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/5">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex items-center gap-3 ${idx > 0 && idx % 2 === 0 ? 'md:pl-6' : idx % 2 !== 0 ? 'pl-4 md:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-blue-400/80 shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8px] text-white/40 uppercase tracking-[0.15em] font-bold mb-0.5">{stat.label}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-white leading-none">{stat.value}</span>
                    <span className="text-[9px] text-white/60 leading-none">{stat.sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
