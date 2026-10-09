import { getPortfolioNavigation, getPortfolioSocialLinks } from '../application/portfolio-service.js';
import { bindMenuToggle } from './menu-controller.js';

const nav = document.getElementById('nav-links');
const socialLinks = document.querySelectorAll('.footer-social a, .social-links a');

function hydrateNavigation() {
  if (!nav) {
    return;
  }

  const links = getPortfolioNavigation();
  const navList = nav.querySelector('ul');

  if (!navList) {
    return;
  }

  navList.innerHTML = links
    .map(
      (item) => `
        <li>
          <a href="${item.href}">
            <i class="${item.icon}"></i> ${item.label}
          </a>
        </li>
      `,
    )
    .join('');
}

function hydrateSocialLinks() {
  const links = getPortfolioSocialLinks();

  Array.from(socialLinks).forEach((element, index) => {
    const item = links[index];
    if (!item) {
      return;
    }

    element.setAttribute('href', item.href);
    element.setAttribute('aria-label', item.label);
    element.innerHTML = `<i class="${item.icon}"></i>`;
  });
}

hydrateNavigation();
hydrateSocialLinks();
bindMenuToggle();
