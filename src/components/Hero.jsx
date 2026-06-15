export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">LA Born · Living in Texas · Fine Art</p>
        <h1 className="hero-title">
          Art that brings <em>light</em>
          <br />
          to every room.
        </h1>
        <p className="hero-subtitle">
          World traveling fine artist &amp; entrepreneur — curating environments, one
          masterpiece at a time.
        </p>
        <p className="hero-desc">
          Whether for a home or a business, Ana Elisa&apos;s original works invite warmth,
          presence, and meaning into the spaces where life unfolds. Explore the collection
          and inquire about acquiring a piece.
        </p>
        <a href="#gallery" className="btn hero-cta">View the Gallery</a>
      </div>
      <div className="hero-image hero-image--logo">
        <div className="hero-logo-frame">
          <img
            src="/sentiments_logo.png"
            alt="Sentiments by Ana Elisa · fine art"
          />
        </div>
      </div>
    </section>
  );
}
