import { useCallback, useEffect, useState } from 'react';
import { ARTWORKS } from '../data/artworks';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

export default function HomePage() {
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
      return (current + direction + ARTWORKS.length) % ARTWORKS.length;
    });
  }, []);

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

  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <Gallery onOpenLightbox={openLightbox} />
      <Divider />
      <About />
      <Contact />
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
