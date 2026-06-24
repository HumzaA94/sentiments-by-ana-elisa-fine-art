import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { thumbUrl } from '../data/artworks';

export default function HomeGallerySlideshow({ artworks, onOpenLightbox }) {
  const slides = artworks ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalSlides]);

  useEffect(() => {
    if (totalSlides > 0 && activeIndex >= totalSlides) {
      setActiveIndex(0);
    }
  }, [activeIndex, totalSlides]);

  if (!totalSlides) {
    return null;
  }

  const safeActiveIndex = Math.min(activeIndex, totalSlides - 1);
  const activeArtwork = slides[safeActiveIndex];
  const artworkLabel = activeArtwork.title || `Artwork ${safeActiveIndex + 1}`;
  const previousIndex = (safeActiveIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (safeActiveIndex + 1) % totalSlides;

  const getSlidePosition = (index) => {
    if (index === safeActiveIndex) return 'active';
    if (index === previousIndex) return 'previous';
    if (index === nextIndex) return 'next';
    return 'hidden';
  };

  const handleSlideClick = (index) => {
    if (index === safeActiveIndex) {
      onOpenLightbox?.(safeActiveIndex);
      return;
    }

    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="home-slideshow">
      <div className="gallery-header home-slideshow-header">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title"><em>Original</em> Works</h2>
        </div>
        <div className="home-slideshow-count" aria-live="polite">
          {String(safeActiveIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>
      </div>

      <div
        className="home-slideshow-frame"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="home-slideshow-track">
          {slides.map((artwork, index) => {
            const slidePosition = getSlidePosition(index);
            const isHidden = slidePosition === 'hidden';
            const fallbackImageUrl = thumbUrl(artwork.id, 400);
            const label = artwork.title || `Artwork ${index + 1}`;

            return (
              <button
                key={artwork.id}
                type="button"
                className={`home-slideshow-slide home-slideshow-slide--${slidePosition}`}
                onClick={() => handleSlideClick(index)}
                aria-label={index === safeActiveIndex ? `View ${label}` : `Show ${label}`}
                aria-hidden={isHidden ? 'true' : undefined}
                tabIndex={isHidden ? -1 : 0}
              >
                <img
                  src={thumbUrl(artwork.id, 600)}
                  alt={index === safeActiveIndex ? label : ''}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImageUrl) {
                      event.currentTarget.src = fallbackImageUrl;
                    }
                  }}
                />
              </button>
            );
          })}
          <span className="home-slideshow-artwork-overlay">View</span>
        </div>
      </div>

      <div className="home-slideshow-dots" aria-label="Choose artwork slide">
        {slides.map((artwork, index) => (
          <button
            key={artwork.id}
            type="button"
            className={`home-slideshow-dot${index === safeActiveIndex ? ' home-slideshow-dot--active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show artwork ${index + 1}`}
            aria-current={index === safeActiveIndex ? 'true' : undefined}
          />
        ))}
      </div>

      <div className="gallery-cta home-slideshow-cta">
        <Link to="/gallery" className="btn btn-gold">
          Explore More
        </Link>
      </div>
    </section>
  );
}
