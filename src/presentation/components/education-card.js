import { escapeHtml } from './html.js';

export function renderEducationCard({ icon, degree, school, year, details }) {
  return `
    <div class="timeline-item">
      <div class="timeline-icon">${escapeHtml(icon)}</div>
      <div class="timeline-content">
        <h3>${escapeHtml(degree)}</h3>
        <p class="school">${escapeHtml(school)}</p>
        <p class="year">${escapeHtml(year)}</p>
        <p class="details">${escapeHtml(details)}</p>
      </div>
    </div>
  `;
}
