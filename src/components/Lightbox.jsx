import { ARTWORKS, thumbUrl } from '../data/artworks';

export default function Lightbox({ index, onClose, onNavigate }) {
  const art = ARTWORKS[index];

  return (
    <div
      className="lightbox open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={art.title || `Artwork ${index + 1}`}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous artwork"
      >
        ‹
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next artwork"
      >
        ›
      </button>
      <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-img-wrap">
          <img
            src={thumbUrl(art.id, 1200)}
            alt={art.title || `Artwork ${index + 1}`}
          />
        </div>
        <div className="lightbox-info">
          <p className="lightbox-num">{index + 1} / {ARTWORKS.length}</p>
          {art.title && <h3 className="lightbox-title">{art.title}</h3>}
          {art.medium && <p className="lightbox-detail">{art.medium}</p>}
          {art.year && <p className="lightbox-detail">{art.year}</p>}
          {art.description && <p className="lightbox-desc">{art.description}</p>}
          <a
            href="#contact"
            className="btn btn-gold lightbox-inquire"
            onClick={onClose}
          >
            Inquire About This Work
          </a>
        </div>
      </div>
    </div>
  );
}
