import { useEffect } from 'react';

// Adds `.visible` to every `.reveal` element when it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
