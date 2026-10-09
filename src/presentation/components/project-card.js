import { escapeHtml } from './html.js';

export function renderProjectCard({ image, imageAlt, title, description, technologies, links }) {
  return `
    <div class="project-card">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt)}">
      <div class="project-content">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <p class="tech-stack">Tech Stack: ${escapeHtml(technologies)}</p>
        <div class="project-links">
          ${links
            .map(
              ({ label, href }) => `
                <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" class="btn">${escapeHtml(label)}</a>
              `,
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}
