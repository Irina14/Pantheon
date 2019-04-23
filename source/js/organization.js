'use strict';

(function () {
  var organizationButtons = document.querySelectorAll('.organization__button');
  var organizationDescs = document.querySelectorAll('.organization__desc');
  var organizationItems = document.querySelectorAll('.organization__item');

  var buttonClickHandler = function (evt) {
    var arrayButtons = Array.prototype.slice.call(organizationButtons);
    var index = arrayButtons.indexOf(evt.target);
    if (!organizationButtons[index].classList.contains('organization__button--active')) {
      for (var i = 0; i < organizationButtons.length; i++) {
        organizationButtons[i].classList.remove('organization__button--active');
        organizationDescs[i].classList.remove('organization__desc--active');
        organizationItems[i].classList.remove('organization__item--active');
      }

      organizationButtons[index].classList.add('organization__button--active');
      organizationDescs[index].classList.add('organization__desc--active');
      organizationItems[index].classList.add('organization__item--active');
      if (window.innerWidth >= 750 && window.innerWidth < 1170) {
        organizationDescs[index].style.left = index * (-118) + "px";
      }
    }
  }

  for (var i = 0; i < organizationButtons.length; i++) {
    organizationButtons[i].addEventListener('click', buttonClickHandler);
  }
})();
