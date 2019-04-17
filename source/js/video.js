'use strict';

(function () {
  var URLS = ['https://www.youtube.com/embed/nvl2qnYVBM8', 'https://www.youtube.com/embed/TBxE8FkDb-0'];
  var videoPantheon = document.querySelector('.video__wrapper--pantheon');
  var videoLinkPantheon = videoPantheon.querySelector('.video__link');
  var videoButtonPantheon = videoPantheon.querySelector('.video__button');
  var videoQuestions = document.querySelector('.video__wrapper--questions');
  var videoLinkQuestions = videoQuestions.querySelector('.video__link');
  var videoButtonQuestions = videoQuestions.querySelector('.video__button');
  var videos = document.querySelectorAll('.video__wrapper');
  var videoLinks = document.querySelectorAll('.video__link');

  videoPantheon.addEventListener('click', function () {
    var iframe = createIframe(URLS[0]);
    videoLinkPantheon.remove();
    videoButtonPantheon.remove();
    videoPantheon.appendChild(iframe);
  });

  videoQuestions.addEventListener('click', function () {
    var iframe = createIframe(URLS[1]);
    videoLinkQuestions.remove();
    videoButtonQuestions.remove();
    videoQuestions.appendChild(iframe);
  });

  var generateURL = function (url) {
    var QUERY = '?rel=0&showinfo=0&autoplay=1'; // видео сразу запускается
    return url + QUERY;
  }

  var createIframe = function (url) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', generateURL(url));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
  };

  for (var i = 0; i < videos.length; i++) {
    videos[i].classList.add('video--enabled');
  }

  for (var i = 0; i < videoLinks.length; i++) {
    videoLinks[i].removeAttribute('href');
  }
})();
