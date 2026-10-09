import { escapeHtml } from './html.js';

export function renderHeader({ name, navigation }) {
  return `
    <header class="topbar">
      <div class="logo">
        <h1><span>${escapeHtml(name.charAt(0))}</span>${escapeHtml(name.slice(1))}</h1>
      </div>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
      </button>
      <nav class="nav-links" id="nav-links" aria-label="Main navigation">
        <ul>
          ${navigation
            .map(
              ({ label, href, icon }) => `
                <li><a href="${escapeHtml(href)}"><i class="${escapeHtml(icon)}"></i> ${escapeHtml(label)}</a></li>
              `,
            )
            .join('')}
        </ul>
      </nav>
    </header>
  `;
}
