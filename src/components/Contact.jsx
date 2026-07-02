import { useState } from 'react';

const CONTACT_EMAIL = 'SentimentsbyAnaElisa@gmail.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((current) => ({ ...current, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: formData.subject || 'New inquiry from Sentiments by Ana Elisa',
          _replyto: formData.email,
          _url: `${window.location.origin}${window.location.pathname}#contact`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();
      const isSuccess = result.success === true || result.success === 'true';

      if (!response.ok || !isSuccess) {
        throw new Error(result.message || 'Unable to send your message right now.');
      }

      setStatus('success');
      setFeedbackMessage('Message sent. Ana will be in touch soon.');
      setFormData(initialFormState);
    } catch (error) {
      setStatus('error');
      setFeedbackMessage(
        error.message || 'Something went wrong. Please try again or email Ana directly.',
      );
    }
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
          <a
            href="https://www.instagram.com/sentiments_by_ana_elisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.wivla.org/member-directory#!biz/id/6a25ae0f10e35f2c1306d306"
            target="_blank"
            rel="noopener noreferrer"
          >
            WiVLA
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
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
          <textarea
            id="message"
            placeholder="Tell Ana Elisa about your interest…"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="form-success">✓ {feedbackMessage}</p>
        )}
        {status === 'error' && (
          <p className="form-error">{feedbackMessage}</p>
        )}
      </form>
    </section>
  );
}
