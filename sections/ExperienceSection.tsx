'use client'

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A journey of building scalable products and leading technical teams.
            </p>
          </div>
        </ScrollReveal>
        
        <ExperienceTimeline />
      </div>
    </section>
  );
}
