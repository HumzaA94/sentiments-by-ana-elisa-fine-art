import { Link } from 'react-router-dom';
import { EXHIBITIONS } from '../data/exhibitions';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  formatDateRange,
  getExhibitionStatus,
  getExhibitionStatusLabel,
  sortExhibitions,
} from '../utils/exhibitionHelpers';

const sortedExhibitions = sortExhibitions(EXHIBITIONS);

export default function ExhibitionsPage() {
  return (
    <>
      <Nav />
      <main className="exhibitions-page">
        <div className="exhibitions-header">
          <div>
            <p className="section-label">On View</p>
            <h1 className="section-title">
              Exhibitions <em>&amp; Events</em>
            </h1>
          </div>
        </div>
        <div className="exhibitions-grid">
          {sortedExhibitions.map((event) => {
            const status = getExhibitionStatus(event.startDate, event.endDate);

            return (
            <article key={event.id} className="exhibition-card">
              <div className="exhibition-poster">
                <img src={event.image} alt={event.title} loading="lazy" />
              </div>
              <div className="exhibition-body">
                <span className={`exhibition-badge exhibition-badge--inline exhibition-badge--${status}`}>
                  {getExhibitionStatusLabel(event.startDate, event.endDate)}
                </span>
                <h2 className="exhibition-title">{event.title}</h2>
                <div className="exhibition-viewing">
                  <span className="exhibition-meta-label">Viewing</span>
                  <p className="exhibition-dates">
                    {formatDateRange(event.startDate, event.endDate)}
                  </p>
                </div>
                <p className="exhibition-description">{event.description}</p>
                <Link to={`/exhibitions/${event.id}`} className="btn btn-gold exhibition-link">
                  View More
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
