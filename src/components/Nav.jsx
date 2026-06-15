import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const isGallery = pathname === '/gallery';
  const isExhibitions = pathname.startsWith('/exhibitions');

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src="/sentiments_logo_icon.png" alt="Sentiments by Ana Elisa · fine art" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to={isGallery ? '/gallery' : '/#gallery'}
            className={isGallery ? 'nav-active' : ''}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/exhibitions" className={isExhibitions ? 'nav-active' : ''}>
            Exhibitions
          </Link>
        </li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
