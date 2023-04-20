'use strict';

$(window).on('load', function () {
  const url = $(location).attr('href'),
    headerHeight = $('header').outerHeight() + 70;
  if (url.indexOf("#") != -1) {
    const anchor = url.split("#"),
      target = $('#' + anchor[anchor.length - 1]),
      position = Math.floor(target.offset().top) - headerHeight;
    $("html, body").animate({ scrollTop: position }, 400);
  }
});

var parent = document.querySelectorAll(".global-li1, .global-li2"); 
var node = [].slice.call(parent, 0); 

node.forEach(function (element) {    
  element.addEventListener("mouseover", function () {  
    element.querySelector(".sub-menu").classList.add("active");
  },
    
  );
  element.addEventListener("mouseout", function () {  
    element.querySelector(".sub-menu").classList.remove("active"); 
  },
    
  );
});


const hum = document.querySelector('.hum');
const nav = document.querySelector('.global-nav');

hum.addEventListener('click', function () {
  if (hum.classList.contains('open')) {
    hum.classList.remove('open');
  } else {
    hum.classList.add('open');
  }

  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
});

function fadeAnime() {

  $('.js-fadeup').each(function () { 
    var elemPos = $(this).offset().top - 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active-fadeup');
    } else {
      $(this).removeClass('active-fadeup');
    }
  });

  $('.js-faderight').each(function () { 
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active-right');
    } else {
      $(this).removeClass('active-right');
    }
  });

}

$(window).scroll(function () {
  fadeAnime();
});

$(window).on('scroll', function () {
  if ($('.fv-wrapper').height() < $(this).scrollTop()) {
    $('.global').addClass('change-color');
  } else {
    $('.global').removeClass('change-color');
  }
});


$(window).on('load', function() {
  $('body').addClass('appear');
});