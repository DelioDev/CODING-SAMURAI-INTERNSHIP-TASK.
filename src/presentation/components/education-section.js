import { renderSectionTitle } from './html.js';
import { renderEducationCard } from './education-card.js';

export function renderEducation(education) {
  return `
    <section id="education" class="education-section">
      ${renderSectionTitle('Education')}
      <div class="timeline">${education.map(renderEducationCard).join('')}</div>
    </section>
  `;
}
