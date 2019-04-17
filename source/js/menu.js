'use strict';

(function () {
  var Close = {
    TEXT: 'Закрыть',
    URL: 'url("../img/close.svg")',
    POSITION: '100% -3px',
    PADDING: '21px',
    WIDTH: '21px'
  };

  var Menu = {
    TEXT: 'Меню',
    URL: 'url("../img/menu.png")',
    POSITION: '100% 3px',
    PADDING: '47px',
    WIDTH: '47px'
  };

  var TABLET_WIDTH = 750;
  var ESC_KEYCODE = 27;
  var menu = document.querySelector('.menu');
  var menuButton = document.querySelector('.header__button');
  var textButton = menuButton.querySelector('span');

  var setStateCloseMenu = function () {
    textButton.textContent = Close.TEXT;
    menuButton.style.backgroundImage = Close.URL;
    menuButton.style.backgroundPosition = Close.POSITION;
    menuButton.style.paddingRight = Close.PADDING;
    if (window.innerWidth < TABLET_WIDTH) {   // вся ширина окна
      menuButton.style.minWidth = Close.WIDTH;
    }
  };

  var setStateOpenMenu = function () {
    textButton.textContent = Menu.TEXT;
    menuButton.style.backgroundImage = Menu.URL;
    menuButton.style.backgroundPosition = Menu.POSITION;
    menuButton.style.paddingRight = Menu.PADDING;
    if (window.innerWidth < TABLET_WIDTH) {  // вся ширина окна
      menuButton.style.minWidth = Menu.WIDTH;
    }
  };

  var documentClickHandler = function (evt) {
    if (evt.target !== menuButton) {
      menu.classList.remove('menu--opened');
      setStateOpenMenu();
    }
  };

  var documentEscKeyHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      menu.classList.remove('menu--opened');
      setStateOpenMenu();
    }
  };

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu--opened');
    if (menu.classList.contains('menu--opened')) {
      setStateCloseMenu();
      document.addEventListener('click', documentClickHandler);
      document.addEventListener('keydown', documentEscKeyHandler);
    } else {
      setStateOpenMenu();
      document.removeEventListener('click', documentClickHandler);
      document.removeEventListener('keydown', documentEscKeyHandler);
    }
  });
})();

