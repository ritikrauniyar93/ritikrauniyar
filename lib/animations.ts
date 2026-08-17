import type { Variants } from "framer-motion";

// =============================================
// EASING
// =============================================

export const ease = [0.25, 0.1, 0.25, 1] as const;
export const easeOut = [0, 0, 0.2, 1] as const;

// =============================================
// SPRING CONFIGS
// =============================================

export const springGentle = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

// =============================================
// SCROLL REVEAL VARIANTS
// =============================================

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

// =============================================
// STAGGER VARIANTS
// =============================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerChild: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// =============================================
// MODAL VARIANTS
// =============================================

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { duration: 0.25, ease },
  },
};

export const overlayFade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// =============================================
// HERO VARIANTS
// =============================================

export const heroStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const heroChild: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

// =============================================
// NAV VARIANTS
// =============================================

export const mobileMenuVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const mobileMenuItemVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.15 },
  },
};
