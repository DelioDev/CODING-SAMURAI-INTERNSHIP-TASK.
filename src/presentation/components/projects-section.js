import { renderSectionTitle } from './html.js';
import { renderProjectCard } from './project-card.js';

export function renderProjects(projects) {
  return `
    <section id="projects" class="projects-section">
      ${renderSectionTitle('🚀 Projects')}
      <div class="projects-container">${projects.map(renderProjectCard).join('')}</div>
    </section>
  `;
}
