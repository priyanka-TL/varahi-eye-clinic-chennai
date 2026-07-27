import { useEffect } from 'react';

const useScrollReveal = (selector = '.slide-up, .fade-in, .fly-in', revealClass = 'revealed', threshold = 0.15) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slight delay ensures the browser paints the initial opacity:0 state 
            // before applying the revealed class, fixing the refresh issue.
            setTimeout(() => {
              entry.target.classList.add(revealClass);
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, revealClass, threshold]);
};

export default useScrollReveal;
