import { escapeHtml } from './html.js';

export function renderAbout({ name }) {
  return `
    <section id="about" class="about-section">
      <div class="about-container">
        <div class="about-image">
          <img src="images/images/adel_djeziri.png" alt="${escapeHtml(name)}">
        </div>
        <div class="about-content">
          <h2>About Me</h2>
          <p>Hello! I'm <span>${escapeHtml(name)}</span>, a passionate <strong>Full-Stack &amp; Mobile Developer</strong>
            with a Master’s degree in <strong>Cybersecurity and Artificial Intelligence</strong>.
            I love creating modern, user-friendly web and mobile apps that make a real impact.</p>
          <p>With over <strong>5 years of programming experience</strong>, I’ve worked across multiple domains —
            from web and mobile to AI-driven systems.
            I’m detail-oriented, fast-learning, and always ready to take on new challenges.</p>
          <p>Currently, I’m enhancing my portfolio and working on innovative projects to expand
            my knowledge in UI/UX and product design.</p>
          <a href="#contact" class="btn">Let's Connect</a>
        </div>
      </div>
    </section>
  `;
}
