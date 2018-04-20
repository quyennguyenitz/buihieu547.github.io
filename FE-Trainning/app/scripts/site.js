/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */
var Site = (function($, window) {
  'use strict';

  var win = $(window),
    body = $('body'),
    html = $('html');

  function isLess600() {
    return window.Modernizr.mq('(max-width: '+ 599 +'px)');
  }

  function isGreater600() {
    return window.Modernizr.mq('(max-width: '+ 1023 +'px)');
  }

  function isGreater1024() {
    return window.Modernizr.mq('(min-width: '+ 1024 +'px)');
  }

  function isDesktop() {
    return html.hasClass('desktop');
  }

  return {
    win: win,
    html: html,
    body: body,
    isLess600: isLess600,
    isGreater600: isGreater600,
    isGreater1024: isGreater1024,
    isDesktop: isDesktop
  };

})(jQuery, window);


$( document ).ready(function() {
  $('.slider-desktop').owlCarousel({ 
    loop:true, 
    margin:0,
    navText: ['<div class="slider-arrow arrow-left"></div>','<div class="slider-arrow"></div>'],
    nav:true, 
    items:1 
  })

  $('.customer-slider').owlCarousel({ 
    loop:true, 
    margin:0,
    navText: ['<div class="slider-arrow arrow-left"></div>','<div class="slider-arrow"></div>'],
    nav:true, 
    items:1 ,
    stagePadding: 80,
  })

  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible');
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
});