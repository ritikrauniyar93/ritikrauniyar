'use client'

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects, type Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const professionalProjects = projects.filter(p => p.isProfessional);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">My Work</span>
                <div className="h-px w-12 bg-indigo-500/50"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                FEATURED <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">PROJECTS</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                A selection of enterprise-grade systems and platforms built for real-world impact.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors whitespace-nowrap">
              Explore All Projects <ArrowRight size={16} />
            </button>
          </div>
        </ScrollReveal>

        {/* Professional Projects */}
        <div className="flex flex-col gap-12 md:gap-16">
          {professionalProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <ProjectCard 
                project={project} 
                index={i} 
                onOpenModal={() => setSelectedProject(project)} 
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden flex justify-center">
          <button className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            Explore All Projects <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          projects={projects}
          onClose={() => setSelectedProject(null)} 
          onNavigate={(p) => setSelectedProject(p)}
        />
      )}
    </section>
  );
}
