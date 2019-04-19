'use strict';

(function () {
  var questionsButtons = document.querySelectorAll('.questions__button');
  var questionsDescs = document.querySelectorAll('.questions__desc');

  var buttonClickHandler = function (evt) {
    for (var i = 0; i < questionsButtons.length; i++) {
      questionsButtons[i].classList.remove('questions__button--active');
      questionsDescs[i].classList.remove('questions__desc--active');
    }

    var arrayButtons = Array.prototype.slice.call(questionsButtons);
    var index = arrayButtons.indexOf(evt.target);
    questionsButtons[index].classList.add('questions__button--active');
    questionsDescs[index].classList.add('questions__desc--active');
  }

  for (var i = 0; i < questionsButtons.length; i++) {
    questionsButtons[i].addEventListener('click', buttonClickHandler);
  }
})();
