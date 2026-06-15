import { ARTWORKS } from '../data/artworks';
import Nav from '../components/Nav';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import { useLightbox } from '../hooks/useLightbox';

export default function GalleryPage() {
  const { lightboxIndex, openLightbox, closeLightbox, navigateLightbox } = useLightbox(ARTWORKS);

  return (
    <>
      <Nav />
      <main className="gallery-page">
        <Gallery
          artworks={ARTWORKS}
          onOpenLightbox={openLightbox}
          sectionId={null}
          showInquireCta
        />
      </main>
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox
          artworks={ARTWORKS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
