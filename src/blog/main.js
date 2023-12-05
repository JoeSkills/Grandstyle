const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  })
);

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.load-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.11 }
  ); // Adjust the threshold as needed

  sections.forEach((section) => {
    observer.observe(section);
  });
});
