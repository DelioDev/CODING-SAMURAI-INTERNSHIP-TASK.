import { getPortfolioPageData } from '../application/portfolio-service.js';
import { renderAbout } from './components/about-section.js';
import { renderContact } from './components/contact-section.js';
import { renderEducation } from './components/education-section.js';
import { renderFooter } from './components/footer.js';
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero-section.js';
import { renderProjects } from './components/projects-section.js';
import { renderSkills } from './components/skills-section.js';

export function renderPortfolioPage(root) {
  const { profile, skills, education, projects, footerSocials, footerLinks } = getPortfolioPageData();

  root.innerHTML = `
    ${renderHeader(profile)}
    ${renderHero(profile)}
    ${renderAbout(profile)}
    <div class="Skills">
      ${renderSkills(skills)}
      ${renderEducation(education)}
      ${renderProjects(projects)}
    </div>
    ${renderContact({ ...profile, socials: profile.socials })}
    ${renderFooter({ ...profile, footerLinks, socials: footerSocials })}
  `;
}
