'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export default function GlobalBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Very subtle scroll parallax (moves 0 to 25px max)
  const yScrollTransform = useTransform(scrollY, [0, 2000], [0, 25]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const smoothY = useSpring(yScrollTransform, physics);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Only enable effects on desktop to save battery and performance
    const checkMobile = () => window.innerWidth < 768;
    
    if (prefersReducedMotion || checkMobile()) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Generate fewer particles for better performance
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15,
    }));
    setTimeout(() => {
      setParticles(newParticles);
    }, 0);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030508]">
      {/* Layer 2: Main Image with Parallax */}
      <motion.div
        className="absolute -inset-[30px] w-[calc(100%+60px)] h-[calc(100%+60px)] bg-no-repeat"
        style={{
          backgroundImage: 'url(/ritikrauniyar/assets/global-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          x: prefersReducedMotion ? 0 : mousePos.x,
          y: prefersReducedMotion ? 0 : smoothY,
        }}
      />

      {/* Layer 3: Dark Cinematic Overlay */}
      {/* We use a gradient that is darker at the bottom for footer blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/40 via-[#030508]/60 to-[#030508]/90" />

      {/* Layer 4: Subtle Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />

      {/* Layer 5: Subtle Noise / Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Floating Light Effect (Data Points) */}
      {!prefersReducedMotion && particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-accent/60 rounded-full blur-[1px]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: ['0%', '-20%', '0%'],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
