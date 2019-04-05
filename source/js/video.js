'use strict';

(function () {
  var URL = 'https://www.youtube.com/embed/nvl2qnYVBM8';
  var video = document.querySelector('.video__wrapper');
  var videoLink = document.querySelector('.video__link');
  var videoButton = document.querySelector('.video__button');

  video.addEventListener('click', function () {
    var iframe = createIframe();
    videoLink.remove();
    videoButton.remove();
    video.appendChild(iframe);
  });

  videoLink.removeAttribute('href');
  video.classList.add('video--enabled');

  function createIframe() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', generateURL(URL));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
  }

  function generateURL(url) {
    var query = '?rel=0&showinfo=0&autoplay=1'; // видео сразу запускается
    return url + query;
  }
})();
