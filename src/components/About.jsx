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

        <div className="about-copy">
          <p className="section-body">
            Born in Los Angeles and raised in Texas, Ana Elisa is a world-traveling fine
            artist, entrepreneur, and the founder of Sentiments by Ana Elisa. Through her
            work, she curates immersive environments and meaningful experiences—one
            masterpiece at a time.
          </p>
          <p className="section-body">
            Ana Elisa creates art that allows the spirit of diverse cultures to breathe
            across the canvas—raw, authentic, and deeply human. Every face, gesture, and
            expression she captures carries a story of resilience, joy, longing, and
            connection. Her work becomes a meeting place for humanity, where cultural
            differences are celebrated and shared emotions transcend language.
          </p>
          <p className="section-body">
            Drawing inspiration from her travels and encounters around the world, Ana Elisa
            approaches art as both a visual and spiritual practice. Inspiration arrives like
            light through a lens—sudden, profound, and impossible to manufacture. She first
            experiences it as an inner pulse, a quiet vibration that transforms into imagery
            before she ever lifts her camera.
          </p>
          <p className="section-body">
            For Ana Elisa, photography begins not with an idea, but with a feeling. Each
            image emerges from a fleeting moment of truth—a silhouette of emotion, a glimpse
            of something her soul recognizes before her eyes fully understand it. Through her
            lens, she invites viewers into stories that are both deeply personal
            and universally felt.
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
