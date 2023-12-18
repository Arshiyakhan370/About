function toggleMenu() {
    const body = document.body;
// const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
  const burgerMenu = document.querySelector('.burger-menu');
  const container = document.querySelector('.container');
  container.classList.toggle('hide');
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('open');

  if ( navLinks.classList.contains('open')) {
    container.style.display = "none";
        navLinks.style.display = "block";
    body.style.overflow = "hidden"; 
  } else {
    navLinks.style.display = "none";
    container.style.display = "block";
    body.style.overflow = "auto"; 
  }
}

