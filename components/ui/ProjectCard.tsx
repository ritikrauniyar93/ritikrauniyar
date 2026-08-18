'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Lock, Sparkles, Code2, Database, Layout } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { fadeUp } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: () => void;
}

// Simple helper to map icons to technologies
const TechIcon = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  if (n.includes('react') || n.includes('next.js')) return <Layout size={12} className="text-blue-400" />;
  if (n.includes('python') || n.includes('flask') || n.includes('fastapi')) return <Code2 size={12} className="text-yellow-400" />;
  if (n.includes('api') || n.includes('javascript') || n.includes('typescript')) return <Code2 size={12} className="text-orange-400" />;
  if (n.includes('sql') || n.includes('database')) return <Database size={12} className="text-emerald-400" />;
  return <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />;
};

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const paddedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative flex flex-col lg:flex-row gap-0 lg:gap-8 rounded-[24px] lg:rounded-[32px] bg-[rgba(8,10,18,0.7)] backdrop-blur-[18px] border border-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(79,70,229,0.15)]"
    >
      {/* Left Content Area (45%) */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between p-8 md:p-12 z-10">
        <div>
          {/* Header Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-sm font-mono font-medium text-white">
              {paddedIndex}
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400/80">
              {project.category}
            </span>
          </div>
          
          {/* Title Area */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles size={16} />
            </div>
          </div>
          
          {/* Subtitle / Description */}
          <p className="text-lg text-foreground/90 font-medium mb-3">
            {project.shortDescription}
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-xs font-medium text-foreground/80 hover:bg-white/10 transition-colors">
                <TechIcon name={tech} />
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1.5 bg-white/[0.02] border border-white/5 rounded-full text-xs font-medium text-muted-foreground">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:scale-105 group/btn"
          >
            View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all hover:border-white/20"
            >
              Visit Website <ArrowUpRight size={16} />
            </a>
          ) : (
            <div className="flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white/5 border border-white/5 text-white/50 rounded-full cursor-not-allowed">
              <Lock size={14} /> Private System
            </div>
          )}
        </div>
      </div>

      {/* Right Image Area (55%) */}
      <div className="w-full lg:w-[55%] p-4 lg:p-8 lg:pl-0 flex items-center justify-center">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl group-hover:border-indigo-500/30 transition-colors duration-500">
          
          {/* Browser / OS Top Bar mockup */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.02] border-b border-white/10 flex items-center px-4 gap-1.5 z-20 backdrop-blur-md">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          </div>

          <div className="absolute inset-0 pt-8 overflow-hidden">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-cover object-top"
                priority={index === 0} // Only prioritize first image
              />
            </motion.div>
          </div>
          
          {/* Subtle overlay glow from image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </motion.div>
  );
}
