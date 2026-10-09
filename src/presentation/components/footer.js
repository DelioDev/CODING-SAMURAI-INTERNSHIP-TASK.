import { escapeHtml, renderSocialLinks } from './html.js';

export function renderFooter({ name, title, footerLinks, socials }) {
  return `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h2>${escapeHtml(name)}</h2>
          <p>Mobile &amp; Web Developer | AI Enthusiast</p>
        </div>
        <div class="footer-links">
          ${footerLinks.map(({ label, href }) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join('')}
          <a href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="delate_account.html" target="_blank" rel="noopener noreferrer">Delete Account</a>
        </div>
        ${renderSocialLinks(socials, 'footer-social')}
      </div>
      <div class="footer-bottom">
        <p>© 2025 <span>${escapeHtml(name)}</span>. All Rights Reserved.</p>
      </div>
    </footer>
  `;
}
