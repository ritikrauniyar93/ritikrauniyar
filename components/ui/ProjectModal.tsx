'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/data/projects';
import { overlayFade, scaleIn } from '@/lib/animations';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  projects: Project[];
  onNavigate: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, projects, onNavigate }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.classList.add('modal-open');
      modalRef.current?.focus();
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            variants={overlayFade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-white/6 shadow-2xl focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-foreground hover:bg-white/10 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-accent uppercase tracking-wider font-semibold">{project.category}</span>
                  {project.status && (
                    <>
                      <span className="text-white/20">•</span>
                      <span className="text-muted">{project.status}</span>
                    </>
                  )}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{project.title}</h2>
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Overview</h3>
                    <p className="text-muted leading-relaxed">{project.overview}</p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Key Features</h3>
                    <ul className="list-disc list-inside text-muted space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </section>

                  {project.architecture && (
                    <section>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Architecture</h3>
                      <p className="text-muted leading-relaxed">{project.architecture}</p>
                    </section>
                  )}
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-sm uppercase tracking-wider text-muted font-semibold mb-3">My Role</h3>
                    <p className="text-foreground">{project.role}</p>
                  </section>

                  <section>
                    <h3 className="text-sm uppercase tracking-wider text-muted font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/6 rounded-full text-sm text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {project.deployment && (
                    <section>
                      <h3 className="text-sm uppercase tracking-wider text-muted font-semibold mb-3">Deployment</h3>
                      <p className="text-foreground">{project.deployment}</p>
                    </section>
                  )}

                  <section className="pt-4 border-t border-white/6">
                    <div className="flex flex-col gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
                        >
                          Visit Live Site <ExternalLink size={16} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/5 text-foreground border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <FaGithub size={16} /> View Source
                        </a>
                      )}
                    </div>
                  </section>
                </div>
              </div>

              {/* Prev/Next Navigation */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/6">
                {prevProject ? (
                  <button
                    onClick={() => onNavigate(prevProject)}
                    className="flex flex-col items-start text-left group"
                  >
                    <span className="text-sm text-muted mb-1 flex items-center gap-1 group-hover:text-accent transition-colors">
                      <ArrowLeft size={14} /> Previous
                    </span>
                    <span className="text-foreground font-medium">{prevProject.title}</span>
                  </button>
                ) : <div />}
                
                {nextProject ? (
                  <button
                    onClick={() => onNavigate(nextProject)}
                    className="flex flex-col items-end text-right group"
                  >
                    <span className="text-sm text-muted mb-1 flex items-center gap-1 group-hover:text-accent transition-colors">
                      Next <ArrowRight size={14} />
                    </span>
                    <span className="text-foreground font-medium">{nextProject.title}</span>
                  </button>
                ) : <div />}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
