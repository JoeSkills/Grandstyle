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

document.addEventListener('scroll', () => {
  const navigationBar = document.querySelector('#nav');

  if (window.scrollY > 0) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
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

const changingData = [
  {
    h1: 'Experience the Beat',
    p: 'Discover new sounds with GrandStyle Entertainment',
    img: './assets/services-image-1.jpeg',
    link: '/services/',
    linkText: 'Get To Know More',
  },
  {
    h1: 'Teesol',
    p: 'Immerse yourself in the world of rhythm and creativity',
    img: './assets/teesol-1.JPG',
    link: '/discography/',
    linkText: 'Get Access To Top Music',
  },
  {
    h1: 'Prince Gadaffi Gold',
    p: 'Immerse yourself in the world of rhythm and creativity',
    img: './assets/prince-gad.JPG',
    link: '/discography/',
    linkText: 'Get Access To Top Music',
  },
];

let currentDataIndex = 0;
const changingH1 = document.querySelector('h1.changing-text');
const changingP = document.querySelector('p.changing-text');
const changingImg = document.querySelector('.changing-image');
const changingButton = document.querySelector('.changing-button');
const headerCtaBtn = document.querySelector('.header-cta-btn');
const changingWrapperEl = document.querySelector('.front-text');

function changeTextAnimation() {
  const currentData = changingData[currentDataIndex];
  changingH1.textContent = currentData.h1;
  changingP.textContent = currentData.p;
  changingButton.textContent = currentData.linkText;
  changingButton.href = currentData.link;
  changingImg.src = currentData.img;
  currentDataIndex = (currentDataIndex + 1) % changingData.length;
}

function checkAnimationProgress() {
  const computedStyle = getComputedStyle(changingWrapperEl);
  const opacity = parseFloat(computedStyle.opacity);

  headerCtaBtn.style.display = opacity === 0 ? 'block' : 'none';

  requestAnimationFrame(checkAnimationProgress);
}

checkAnimationProgress();

setInterval(changeTextAnimation, 10000);
