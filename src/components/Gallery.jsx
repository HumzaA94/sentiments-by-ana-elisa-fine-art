import { ARTWORKS, thumbUrl } from '../data/artworks';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section id="gallery">
      <div className="gallery-header">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title"><em>Original</em> Works</h2>
        </div>
      </div>
      <div className="gallery-grid">
        {ARTWORKS.map((art, index) => (
          <div
            key={art.id}
            className="gallery-item"
            onClick={() => onOpenLightbox(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onOpenLightbox(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={art.title || `Artwork ${index + 1}`}
          >
            <img
              src={thumbUrl(art.id, 600)}
              alt={art.title || `Artwork ${index + 1}`}
              loading="lazy"
            />
            <div className="gallery-overlay">
              {art.title && <div className="gallery-overlay-title">{art.title}</div>}
              {art.medium && (
                <div className="gallery-overlay-meta">
                  {art.medium}
                  {art.year ? ` · ${art.year}` : ''}
                </div>
              )}
              <div className="gallery-view-btn">View</div>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-cta">
        <a href="#contact" className="btn btn-gold">Inquire About Acquiring a Piece</a>
      </div>
    </section>
  );
}
