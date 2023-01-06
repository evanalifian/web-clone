// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const social = document.querySelector('.navbar-list');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('rotate');
  social.classList.toggle('slide');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  menuToggle.classList.remove('rotate');
  social.classList.remove('slide');
}));