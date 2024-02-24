function toggleAccountMenu() {
  document.querySelector('.account-cta').classList.toggle('active');
}

function toggleSearchBar() {
  document.querySelector('.search-bar-wrapper').classList.toggle('active');
}

function toggleSidebar() {
  document.querySelector('.nav-main').classList.toggle('active');
}

function toggleFilters() {
  document.querySelector('.filter-options').classList.toggle('active');
}

function closeModal(event) {
  var modalOverlay = document.querySelector('.modal-overlay');

  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

function hideModal() {
  document.querySelector('.modal-overlay').classList.remove('active');
}

function toggleModal(event) {
  document.querySelector('.modal-overlay').classList.add('active');
}