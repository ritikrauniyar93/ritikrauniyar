'use client'

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TechStack() {
  const categories = [
    {
      title: 'AI & Automation',
      skills: ['Python', 'AI APIs', 'Automation', 'Data Processing']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Express']
    },
    {
      title: 'Mobile',
      skills: ['Flutter', 'Dart']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'SQLite']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Vercel', 'Cloudflare', 'GitHub Actions', 'Docker']
    }
  ];

  return (
    <section id="stack" className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              The tools and technologies I use to build scalable systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-surface border border-white/6 h-full">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1.5 text-sm bg-background border border-white/6 rounded-lg hover:border-white/10 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
