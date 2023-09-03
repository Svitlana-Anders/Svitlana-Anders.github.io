console.log("Hello from JavaScript!");


  $(document).ready(function() {
    // Обработчик клика на кнопке "About me"
    $('a[href="#about-me"]').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#about-me').offset().top
      }, 2000) // 1000 миллисекунд (1 секунда) для плавной прокрутки
    });

    // Обработчик клика на кнопке "Contact me"
    $('button[data-target="#footer"]').click(function() {
      $('html, body').animate({
        scrollTop: $('#footer').offset().top
      }, 1000)
    });

    // Добавьте аналогичные обработчики для других кнопок, если необходимо

    // Обработчик клика на кнопке "Blog"
    $('button[data-target="#blog"]').click(function() {
      $('html, body').animate({
        scrollTop: $('#blog').offset().top
      }, 1000)
    })
  });


  var videoPlayer = document.getElementById('video-player');
  var videoList = document.getElementById('video-list');

  videoList.addEventListener('click', function (event) {
    // Проверяем, что был клик по элементу списка видео (элементу li)
    if (event.target.tagName === 'LI') {
      // Получаем значение атрибута data-video-src у выбранного элемента
      var videoSrc = event.target.getAttribute('data-video-src');

      // Обновляем атрибут src видеоплеера с выбранным видео
      videoPlayer.src = videoSrc;

      // Запускаем воспроизведение видео
      videoPlayer.play();
    }
  });
  $(document).ready(function() {
    // Показать или скрыть кнопку в зависимости от положения страницы
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Плавная прокрутка вверх при клике на кнопку
    $('#scrollToTopButton').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    })
  });
  






