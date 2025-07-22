import { useCallback } from 'react';

export function useScrollToLevel() {
  const scrollToLevel = useCallback((levelIndex: number) => {
    const gameWorld = document.getElementById('gameWorld');
    const sections = document.querySelectorAll('.level-section');
    
    if (window.innerWidth >= 768) {
      // Desktop horizontal scrolling
      const targetSection = sections[levelIndex];
      if (targetSection && gameWorld) {
        gameWorld.scrollTo({
          left: (targetSection as HTMLElement).offsetLeft,
          behavior: 'smooth'
        });
      }
    } else {
      // Mobile vertical scrolling
      const targetSection = sections[levelIndex];
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return scrollToLevel;
}
