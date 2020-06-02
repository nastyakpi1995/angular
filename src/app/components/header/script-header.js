$('.header-center-search-btn').click(function () {
  $('.header-center-search-form').removeClass('hide');
  $('.search-form').addClass('show');
});

$('.header-center-search-exit').click(function (event) {
  event.preventDefault();
  $('.search-form').addClass('hide-search');
  setTimeout(function () {
    $('.header-center-search-form').addClass('hide');
    $('.search-form').removeClass('show').removeClass('hide-search');
  }, 1200)
});

$('.user-logo').click(function () {
  $('.user-dropdown').toggleClass('hide');
});
