'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={shouldReduceMotion ? 'animate' : 'initial'}
      whileInView="animate"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
