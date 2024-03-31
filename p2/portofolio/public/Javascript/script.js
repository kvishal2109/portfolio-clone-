// hamburger
const hambuerger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hambuerger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');
});

//NAVBAR FIXED
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset> fixedNav){
    header.classList.add('navbar-fixed')
} else {
    header.classList.remove('navbar-fixed');
}
};

// toggle 
const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Optional: Change button text based on mode
  button.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
