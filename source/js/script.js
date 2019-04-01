var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--nojs');

menuToggle.addEventListener('click', function() {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
  }
});

if (document.querySelector('.form')) {
  var form = document.querySelector('.form');
  var nickname = form.querySelector('[name=nickname]');
  var weight = form.querySelector('[name=weight]');
  var email = form.querySelector('[name=email]');
  var tel = form.querySelector('[name=tel]');

  form.addEventListener('submit', function(evt) {
    if (!nickname.value) {
      evt.preventDefault();
      nickname.classList.add('form__field--error');
    } else {
      nickname.classList.remove('form__field--error');
    }

    if (!weight.value) {
      evt.preventDefault();
      weight.classList.add('form__field--error');
    } else {
      weight.classList.remove('form__field--error');
    }

    if (!email.value) {
      evt.preventDefault();
      email.classList.add('form__field--error');
    } else {
      email.classList.remove('form__field--error');
    }

    if (!tel.value) {
      evt.preventDefault();
      tel.classList.add('form__field--error');
    } else {
      tel.classList.remove('form__field--error');
    }
  });
}
