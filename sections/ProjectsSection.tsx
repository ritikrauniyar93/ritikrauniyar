'use client'

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects, type Project } from '@/data/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const professionalProjects = projects.filter(p => p.isProfessional);
  const earlierProjects = projects.filter(p => !p.isProfessional);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Enterprise platforms, AI pipelines, and comprehensive systems I&apos;ve built.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {professionalProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard 
                project={project} 
                index={i} 
                onOpenModal={() => setSelectedProject(project)} 
              />
            </ScrollReveal>
          ))}
        </div>

        {earlierProjects.length > 0 && (
          <div className="border-t border-white/6 pt-16 mt-16">
            <ScrollReveal>
              <div className="mb-12">
                <h3 className="text-2xl font-semibold tracking-tight mb-2">Earlier Work &amp; Experiments</h3>
                <p className="text-muted-foreground">Personal projects and exploratory applications.</p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-6">
              {earlierProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <ProjectCard 
                    project={project} 
                    index={i} 
                    onOpenModal={() => setSelectedProject(project)} 
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
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
