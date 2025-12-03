const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const linksInNav = document.querySelectorAll('.nav-links a');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

linksInNav.forEach((link) => {
  link.onclick = () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

const scrollElements = document.querySelectorAll('.timeline-item, .project-card, .article, .about-container, .bento-card');

scrollElements.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const titleObserverOptions = {
  root: null,
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0
};

const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active-title');
    } else {
      entry.target.classList.remove('active-title');
    }
  });
}, titleObserverOptions);

const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
  titleObserver.observe(title);
});