export default function About() {
  return (
    <section id="about">
      <div className="about-portrait">
        <div className="about-portrait-frame">
          <img src="/ana-elisa.jpeg" alt="Ana Elisa" />
        </div>
      </div>
      <div className="about-text">
        <p className="section-label">About the Artist</p>
        <h2 className="section-title">Ana <em>Elisa</em></h2>

        <div className="about-block">
          <h3 className="about-block-title">The Mission</h3>
          <p className="section-body">
            I create art that brings light to rooms — original works meant to transform the
            spaces where we live, work, and gather. Each piece is an invitation to pause,
            feel, and let a room breathe with warmth and intention.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-title">The Perspective</h3>
          <p className="section-body">
            As a world traveling fine artist and entrepreneur, I curate environments one
            masterpiece at a time — for homes, offices, hospitality spaces, and beyond.
            Born in Los Angeles and now living in Texas, I draw on a global perspective and
            a deep commitment to storytelling through mixed media and oil.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-title">The Standard</h3>
          <p className="section-body">
            Rooted in broadcast journalism and guided by the strategic precision of an MBA,
            I approach fine art with excellence and intentionality. My collections are not
            merely decorative — they are narratives that elevate a room and endure for a
            lifetime.
          </p>
        </div>

        <div className="about-contact">
          <p className="about-contact-lead">
            To explore the collection or inquire about acquiring a piece, contact me at:
          </p>
          <a href="mailto:SentimentsbyAnaElisa@gmail.com" className="about-contact-email">
            SentimentsbyAnaElisa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
