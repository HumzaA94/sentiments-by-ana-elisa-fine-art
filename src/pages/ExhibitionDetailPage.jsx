import { Link, Navigate, useParams } from 'react-router-dom';
import { getExhibitionById } from '../data/exhibitions';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { formatDate, formatDateRange, getExhibitionStatus, getExhibitionStatusLabel } from '../utils/exhibitionHelpers';

export default function ExhibitionDetailPage() {
  const { id } = useParams();
  const event = getExhibitionById(id);

  if (!event) {
    return <Navigate to="/exhibitions" replace />;
  }

  const status = getExhibitionStatus(event.startDate, event.endDate);

  return (
    <>
      <Nav />
      <main className="exhibition-article">
        <Link to="/exhibitions" className="exhibition-back">
          ← All Exhibitions
        </Link>

        <header className="exhibition-article-header">
          <span className={`exhibition-badge exhibition-badge--inline exhibition-badge--${status}`}>
            {getExhibitionStatusLabel(event.startDate, event.endDate)}
          </span>
          <p className="section-label">Exhibition</p>
          <h1 className="exhibition-article-title">{event.title}</h1>
          <p className="exhibition-article-dates">
            {formatDateRange(event.startDate, event.endDate)}
          </p>
        </header>

        <figure className="exhibition-article-figure">
          <img src={event.image} alt={event.title} />
        </figure>

        <div className="exhibition-article-layout">
          <aside className="exhibition-article-sidebar">
            <div className="exhibition-sidebar-block">
              <span className="exhibition-meta-label">Venue</span>
              <p>{event.venue}</p>
              <p>{event.address}</p>
            </div>
            <div className="exhibition-sidebar-block">
              <span className="exhibition-meta-label">Viewing</span>
              <p>{formatDateRange(event.startDate, event.endDate)}</p>
            </div>
            <div className="exhibition-sidebar-block">
              <span className="exhibition-meta-label">Opening Reception</span>
              <p>
                {formatDate(event.receptionDate)} · {event.receptionTime}
              </p>
            </div>
            <div className="exhibition-sidebar-block">
              <span className="exhibition-meta-label">Curated by</span>
              <p>{event.curator}</p>
            </div>
            {event.url && (
              <a
                href={event.url}
                className="btn btn-gold exhibition-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Event Listing
              </a>
            )}
          </aside>

          <article className="exhibition-article-body">
            {event.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="section-body">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
