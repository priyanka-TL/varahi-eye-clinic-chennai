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
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    // 1. Initial observation
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));

    // 2. Watch for dynamically added elements (lazy loading, routing)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.matches && node.matches(selector)) {
              observer.observe(node);
            }
            if (node.querySelectorAll) {
              node.querySelectorAll(selector).forEach((el) => observer.observe(el));
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [selector, revealClass, threshold]);
};

export default useScrollReveal;
