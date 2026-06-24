import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const isGallery = pathname === '/gallery';
  const isExhibitions = pathname.startsWith('/exhibitions');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={isMenuOpen ? 'nav-open' : ''}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src="/sentiments_logo_icon.png" alt="Sentiments by Ana Elisa · fine art" />
      </Link>
      <button
        type="button"
        className="nav-menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className="nav-links">
        <li className="nav-drawer-brand">
          <Link to="/" onClick={closeMenu}>
            <img src="/sentiments_logo.png" alt="Sentiments by Ana Elisa · fine art" />
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={isGallery ? 'nav-active' : ''} onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/exhibitions"
            className={isExhibitions ? 'nav-active' : ''}
            onClick={closeMenu}
          >
            Exhibitions
          </Link>
        </li>
        <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
      <button
        type="button"
        className="nav-scrim"
        aria-label="Close navigation menu"
        onClick={closeMenu}
      />
    </nav>
  );
}
