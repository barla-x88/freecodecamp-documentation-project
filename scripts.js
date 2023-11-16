const navbar = document.querySelector('#navbar');

const burgers = document.querySelector('.burgers');

const navLinks = document.querySelector('.link-list');

burgers.addEventListener('click', () => {
  navbar.classList.toggle('show-navbar');
});

navLinks.addEventListener('click', (e) => {
  if (e.target.nodeType === 1) {
    navbar.classList.toggle('show-navbar');
  }
});
