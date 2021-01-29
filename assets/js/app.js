const navbar = document.getElementById('nav');
const topLinks = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
    topLinks.classList.add('show-link');
  } else {
    navbar.classList.remove('fixed-nav');
    topLinks.classList.remove('show-link');
  }
});
