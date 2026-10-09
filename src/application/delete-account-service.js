import { legalData } from '../infrastructure/data/legal-data.js';

export function handleDeleteRequest() {
  const email = legalData.email;
  const subject = legalData.emailSubject;
  const body = legalData.emailBody;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const modal = document.getElementById('customModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

export function closeDeleteModal() {
  const modal = document.getElementById('customModal');
  if (modal) {
    modal.style.display = 'none';
  }
}
