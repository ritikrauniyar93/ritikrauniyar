'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { experiences } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Animated Vertical Line */}
      <motion.div 
        className="absolute left-[15px] md:left-[27px] top-4 bottom-4 w-px bg-white/10 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <div className="space-y-16 relative">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.id} delay={index * 0.1}>
            <div className="relative pl-12 md:pl-20 group">
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-[23px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-white/20 group-hover:border-accent transition-colors duration-300 z-10" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="text-lg text-muted-foreground font-medium mt-1">{exp.company}</div>
                </div>
                <div className="inline-flex w-fit px-3 py-1 bg-white/5 border border-white/6 rounded-full text-sm text-foreground/80 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start text-muted-foreground text-sm md:text-base leading-relaxed">
                    <span className="mr-3 text-accent/50 mt-1.5 text-xs">●</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-surface border border-white/6 rounded-full text-xs text-foreground/80 group-hover:border-white/10 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
