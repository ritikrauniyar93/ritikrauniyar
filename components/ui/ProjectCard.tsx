'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { fadeUp } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: () => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const paddedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-2xl bg-surface hover:bg-surface-hover border border-white/6 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-full md:w-2/5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-mono text-muted">{paddedIndex}</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-accent">{project.category}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
          <p className="text-muted leading-relaxed mb-6">{project.shortDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/6 rounded-full text-xs text-foreground">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1 bg-white/5 border border-white/6 rounded-full text-xs text-muted">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group/btn"
          >
            View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Visit Website <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="w-full md:w-3/5">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {project.links.type === 'Private Production System' && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white pointer-events-none">
              Private Production System
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
