import { useEffect, useRef } from 'react';

export function useReveal(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('revealed');
        el.querySelectorAll('.reveal, .reveal-scale').forEach((child) => {
          child.classList.add('revealed');
        });
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
