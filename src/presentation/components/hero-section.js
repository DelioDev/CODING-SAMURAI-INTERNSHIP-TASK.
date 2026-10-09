import { escapeHtml } from './html.js';

export function renderHero({ name, title }) {
  return `
    <section id="home" class="hero">
      <div class="hero-content">
        <h2>Hello, I'm <span>${escapeHtml(name)}</span></h2>
        <p>${escapeHtml(title)}</p>
        <a href="files/DjeziriAdel.pdf" class="btn" download>
          <i class="fa-solid fa-arrow-down"></i> Download CV
        </a>
      </div>
      <div class="hero-photo">
        <img src="images/images/adel_djeziri.png" alt="${escapeHtml(name)} photo">
      </div>
    </section>
  `;
}
