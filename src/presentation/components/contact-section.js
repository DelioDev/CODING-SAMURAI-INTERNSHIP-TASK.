import { escapeHtml, renderSectionTitle, renderSocialLinks } from './html.js';

export function renderContact({ email, phone, location, socials }) {
  return `
    <section id="contact" class="contact-section">
      ${renderSectionTitle('📩 Contact Me')}
      <p class="contact-intro">Let’s work together or talk about your next project. I’m always open to
        collaborations and new ideas.</p>
      <div class="contact-container">
        <div class="contact-info">
          <h3>Get In Touch</h3>
          <p><i class="fas fa-envelope"></i> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><i class="fas fa-phone"></i> ${escapeHtml(phone)}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${escapeHtml(location)}</p>
          ${renderSocialLinks(socials, 'social-links')}
        </div>
        <form class="contact-form" action="#" method="POST">
          <div class="form-group"><input type="text" name="name" placeholder="Your Name" required></div>
          <div class="form-group"><input type="email" name="email" placeholder="Your Email" required></div>
          <div class="form-group"><textarea name="message" rows="5" placeholder="Your Message" required></textarea></div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </section>
  `;
}
