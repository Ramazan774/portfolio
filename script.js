const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const linksInNav = document.querySelectorAll('.nav-links a');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')){
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
})