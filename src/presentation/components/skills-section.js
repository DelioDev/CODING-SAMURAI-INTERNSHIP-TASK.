import { renderSectionTitle } from './html.js';
import { renderSkillCard } from './skill-card.js';

export function renderSkills(skills) {
  return `
    <section id="skills" class="skills-section">
      ${renderSectionTitle('💼 Skills')}
      <div class="skills-container">${skills.map(renderSkillCard).join('')}</div>
    </section>
  `;
}
