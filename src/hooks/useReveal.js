import { useEffect } from 'react';

// Adds `.visible` to every `.reveal` element when it scrolls into view.
// Uses a 0 threshold + bottom rootMargin so even sections taller than the
// viewport reveal reliably (a non-zero threshold can never be met by very
// tall elements, which would leave them stuck invisible / blank).
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));

    // Fallback: if IntersectionObserver isn't available, just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));

    // Safety net: anything still hidden after a moment (e.g. observer never
    // fired for an off-screen edge case) is revealed so no section stays blank.
    const safety = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('visible');
      });
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
