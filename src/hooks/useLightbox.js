import { useCallback, useEffect, useState } from 'react';

export function useLightbox(artworks) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex((current) => {
      if (current === null) return current;
      return (current + direction + artworks.length) % artworks.length;
    });
  }, [artworks.length]);

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') navigateLightbox(1);
      if (event.key === 'ArrowLeft') navigateLightbox(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  return { lightboxIndex, openLightbox, closeLightbox, navigateLightbox };
}
