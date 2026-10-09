export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export function renderSectionTitle(title) {
  return `<h2 class="section-title">${escapeHtml(title)}</h2>`;
}

export function renderSocialLinks(links, className) {
  return `
    <div class="${escapeHtml(className)}">
      ${links
        .map(
          ({ label, href, icon }) => `
            <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(label)}">
              <i class="${escapeHtml(icon)}"></i>
            </a>
          `,
        )
        .join('')}
    </div>
  `;
}
