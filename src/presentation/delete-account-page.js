import { closeDeleteModal, handleDeleteRequest } from '../application/delete-account-service.js';

document.addEventListener('DOMContentLoaded', () => {
  const deleteButton = document.querySelector('.btn-mail');
  const closeButton = document.querySelector('.close-btn');

  if (deleteButton) {
    deleteButton.addEventListener('click', handleDeleteRequest);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeDeleteModal);
  }
});
