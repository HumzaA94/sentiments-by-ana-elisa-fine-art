import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <img src="/sentiments_logo.png" alt="Sentiments by Ana Elisa · fine art" className="footer-logo" />
      <span>© 2026 · LA born · Living in Texas · All works protected</span>
      <span>
        <Link to="/#gallery">Gallery</Link> · <Link to="/exhibitions">Exhibitions</Link> · <Link to="/#about">About</Link> · <Link to="/#contact">Contact</Link>
      </span>
    </footer>
  );
}
