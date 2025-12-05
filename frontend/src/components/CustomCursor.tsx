import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (!cursorDot || !cursorOutline) return;

    let rafId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Utiliser requestAnimationFrame pour optimiser les performances
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.animate(
          { left: `${posX}px`, top: `${posY}px` },
          { duration: 500, fill: 'forwards' }
        );
      });
    };

    const handleMouseEnter = () => {
      if (cursorOutline) {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorOutline) {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, input, .accordion-item');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
}

