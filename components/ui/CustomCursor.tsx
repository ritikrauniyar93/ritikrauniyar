'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on devices with hover capabilities
    if (!window.matchMedia('(hover: hover)').matches) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Request animation frame for smooth updates
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
          }
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]')
      ) {
        cursorRef.current?.classList.add('hovering');
      } else {
        cursorRef.current?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot hidden md:block" />;
}
