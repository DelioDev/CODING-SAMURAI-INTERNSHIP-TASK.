import { renderPortfolioPage } from './portfolio-page.js';
import { bindMenuToggle } from './menu-controller.js';

const app = document.getElementById('portfolio-app');
if (!app) {
  throw new Error('Portfolio page root element "#portfolio-app" was not found.');
}

renderPortfolioPage(app);
bindMenuToggle();
