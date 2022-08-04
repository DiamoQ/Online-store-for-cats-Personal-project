let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');

const toggleMenu = (e) => {
  e.preventDefault ();
  hamburger.classList.toggle('hamburger--active');
  menu.classList.toggle('header__right-part--active');
  pageScroll.toggleBlock();
};

hamburger.addEventListener( 'click' , toggleMenu);

menu.addEventListener('click', (ev) => {
  ev.preventDefault ();
  const target = ev.target;
  if (target.classList.contains('header__link')) {
    toggleMenu(ev);
    pageScroll.toggleBlock('unblock');
  }
});