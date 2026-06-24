import { useMemo } from 'react';
import { ARTWORKS, HOME_GALLERY_PREVIEW_COUNT } from '../data/artworks';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import HomeGallerySlideshow from '../components/HomeGallerySlideshow';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import { useLightbox } from '../hooks/useLightbox';

export default function HomePage() {
  const previewArtworks = useMemo(
    () => ARTWORKS.slice(0, HOME_GALLERY_PREVIEW_COUNT),
    [],
  );
  const { lightboxIndex, openLightbox, closeLightbox, navigateLightbox } = useLightbox(previewArtworks);

  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <HomeGallerySlideshow
        artworks={previewArtworks}
        onOpenLightbox={openLightbox}
      />
      <Divider />
      <About />
      <Contact />
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox
          artworks={previewArtworks}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
