const navbar = document.getElementById('navbar');

window.onscroll = () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled'); 
  } else {
    navbar.classList.remove('scrolled'); 
  }
};

window.addEventListener('scroll', () => {
  console.log(window.scrollY); 
});
