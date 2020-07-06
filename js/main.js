const menuButton = document.querySelector('.header__mobile-menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menuBlock = document.querySelector('.header__menu');

menuButton.addEventListener('click', () => {
  if (menuBlock.classList.contains('header__menu__hidden')) {
    menuBlock.classList.remove('header__menu__hidden');
    menuButtonImage.src = 'images/icon-close.svg';
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuBlock.classList.add('header__menu__hidden');
    menuButtonImage.src = 'images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
