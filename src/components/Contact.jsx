import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div>
        <p className="section-label">Get in Touch</p>
        <p className="section-body">
          Whether you&apos;re a collector, a business curating a space, or simply drawn to a
          piece for your home, Ana Elisa welcomes inquiries about acquiring original works
          from the collection.
        </p>
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-label">Email</span>
            <a href="mailto:SentimentsbyAnaElisa@gmail.com" className="contact-info-value contact-info-link">
              SentimentsbyAnaElisa@gmail.com
            </a>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-label">Availability</span>
            <span className="contact-info-value">Residential &amp; Commercial Acquisitions · Inquiries Welcome</span>
          </div>
        </div>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a
            href="https://www.wivla.org/member-directory#!biz/id/6a25ae0f10e35f2c1306d306"
            target="_blank"
            rel="noopener noreferrer"
          >
            WiVLA
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" defaultValue="">
            <option value="">Select…</option>
            <option>Acquiring for home</option>
            <option>Acquiring for business / commercial space</option>
            <option>Exhibition / collaboration</option>
            <option>Press / media</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell Ana Elisa about your interest…" />
        </div>
        <button type="submit" className="btn">Send Message</button>
        {submitted && (
          <p className="form-success">✓ Message sent. Ana will be in touch.</p>
        )}
      </form>
    </section>
  );
}
