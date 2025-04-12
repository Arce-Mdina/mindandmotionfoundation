// utils/scroll.ts
export const scrollTo = (
  target: string | Element,
  options: {
    offset?: number;
    delay?: number;
    behavior?: ScrollBehavior;
  } = {}
): void => {
  const { offset = 0, delay = 0, behavior = 'smooth' } = options;

  setTimeout(() => {
    let element: Element | null;

    if (typeof target === 'string') {
      element = document.querySelector(target);
    } else {
      element = target;
    }

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const scrollPosition = elementPosition - offset;
      window.scrollTo({
        top: scrollPosition,
        behavior,
      });
    } else {
      console.warn(`Element not found: ${target}`);
    }
  }, delay);
};
