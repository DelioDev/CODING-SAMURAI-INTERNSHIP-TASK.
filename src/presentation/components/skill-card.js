import { escapeHtml } from './html.js';

export function renderSkillCard({ title, items }) {
  return `
    <div class="skill-card">
      <h3>${escapeHtml(title)}</h3>
      <ul>
        ${items
          .map((item) => {
            if (typeof item === 'string') {
              return `<li>${escapeHtml(item)}</li>`;
            }

            const label = escapeHtml(item.label);
            const value = item.value ? ` ${escapeHtml(item.value)}` : '';
            return `<li><strong>${label}</strong>${value}</li>`;
          })
          .join('')}
      </ul>
    </div>
  `;
}
