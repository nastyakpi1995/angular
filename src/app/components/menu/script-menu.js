$('.menu-list > li > .open-submenu').on('click', function(){
  $(this).addClass('active');
  var element = $(this).parents('li').children('ul');

  if (element.length > 0) {
    $(element).slideToggle( );
    $('.header-center-back').toggleClass('hide');
  }
});

$('.menu-list > li > span').on('click', function () {
  var $list =  $('.menu-list > li > span ');
  $list.each(function (i,element) {
    if ($(this).hasClass('active'));
    $(this).removeClass('active');
  });
  $(this).addClass('active');
  if ( $('.header-center-back').hasClass('hide')){
    $('.header-center-back').removeClass('hide');
  }
});

$('.menu-list > li ').on('click', function (event) {
  var $list =  $('.menu-list > li ');

  $list.each(function (i,element) {
    if (event.target !== $(element)[0]){
      if ($(element).hasClass('active')){
        $(element).removeClass('active');
      }
    }

  });

  $(this).addClass('active');
  if ( $('.header-center-back').hasClass('hide')){
    $('.header-center-back').removeClass('hide');
  }
});
