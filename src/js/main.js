$(document).ready(function() {

  // Модальное окно
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });

//Маска для телефона
$('.phone').mask("+7 (999) 999-99-99");

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:3500,
  prevArrow:false,
  nextArrow:false,
  dots: true,
  dotsClass: "dots",
  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>1</a>';
    },
});

$('.people-slider').slick({
  prevArrow:false,
  nextArrow:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  dotsClass: "dots people-dots",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ],
  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>1</a>';
    },
});


//Валидация формы brif
$('.map-modal').validate({
  rules: {
    phone: {
      required: true,
    },
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
  },
  messages: {
    phone: {
      required: "Укажите телефон",
    },
    username: {
      required: "Обязательное поле",
      minlength: jQuery.validator.format("Минимальное кол-во символов: {0}"),
    },
  }
});

$('.map-modal__second').validate({
  rules: {
    phone: {
      required: true,
    },
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
  },
  messages: {
    phone: {
      required: "Укажите телефон",
    },
    username: {
      required: "Обязательное поле",
      minlength: jQuery.validator.format("Минимальное кол-во символов: {0}"),
    },
  }
});

var reviews = $('.reviews');
var reviewsTop = reviews.offset().top;
$(window).bind('scroll', function () {
  var windiwTop = $(this).scrollTop();
  if (windiwTop>reviewsTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A65b330db6c950f33c7232277a717656cc300fb18fd1b27c5f3648064ca70eac8&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false"></script>')
    $(window).unbind('scroll');
  }
});


$("#menu").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});



$('.menu-btn').on('click', function() {
  
  $(this).toggleClass('menu-btn__active'),
  $('.menu-nav').toggleClass('menu-nav_active');
});

$('#button-1').click(function () {
  $('#button-1').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-1').css({color : "#000000"});
});
$('#button-1').mouseleave(function () {
  $('#button-1').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-1').css({color : "#ffffff"});
});

$('#button-2').click(function () {
  $('#button-2').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-2').css({color : "#000000"});
});
$('#button-2').mouseleave(function () {
  $('#button-2').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-2').css({color : "#ffffff"});
});

$('#button-3').click(function () {
  $('#button-3').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-3').css({color : "#000000"});
});
$('#button-3').mouseleave(function () {
  $('#button-3').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-3').css({color : "#ffffff"});
});

$('#button-4').click(function () {
  $('#button-4').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-4').css({color : "#000000"});
});
$('#button-4').mouseleave(function () {
  $('#button-4').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-4').css({color : "#ffffff"});
});

$('#button-5').click(function () {
  $('#button-5').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-5').css({color : "#000000"});
});
$('#button-5').mouseleave(function () {
  $('#button-5').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-5').css({color : "#ffffff"});
});

$('#button-6').click(function () {
  $('#button-6').html("от 500 р.");
  $(this).addClass('button-active');
  $('#title-6').css({color : "#000000"});
});
$('#button-6').mouseleave(function () {
  $('#button-6').html("узнать цену");
  $(this).removeClass('button-active');
  $('#title-6').css({color : "#ffffff"});
});
});