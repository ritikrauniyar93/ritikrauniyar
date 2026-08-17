'use client'

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Terminal, Server, Database } from 'lucide-react';

export default function About() {
  const capabilities = [
    { icon: Terminal, title: 'AI & Automation', description: 'Developing intelligent pipelines and predictive models that automate complex workflows.' },
    { icon: Server, title: 'Enterprise Platforms', description: 'Architecting scalable applications tailored for robust business requirements.' },
    { icon: Database, title: 'Cloud Infrastructure', description: 'Designing secure, resilient database and deployment architectures.' }
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-5">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                I build the systems that power modern businesses.
              </h2>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-base leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>
                Currently, I am the AI Engineer & IT Head at KLFPRO, where I lead the technical direction and development of critical enterprise systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                My expertise spans building comprehensive CRM systems, HRMS solutions, healthcare platforms, and specialized AI tools. I focus on delivering scalable software that solves complex business problems efficiently.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                I take pride in my hands-on approach, owning the complete product lifecycle. From architecting the initial database schema to implementing the frontend, writing the backend logic, and managing the cloud deployment, I ensure seamless integration at every layer.
              </p>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="p-6 rounded-xl bg-surface border border-white/6 hover:border-white/10 transition-colors h-full flex flex-col">
                <div className="mb-4 text-foreground bg-white/5 inline-flex p-3 rounded-lg w-fit">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
