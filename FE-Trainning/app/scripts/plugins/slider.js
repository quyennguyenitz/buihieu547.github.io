;(function($, window, undefined) {
  'use strict';

  var pluginName = 'slider';
    // Site = window.Site;


  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
     this.initSlider();
    },

    initSlider: function() {
      var that = this,
          el = that.element,
          options = that.options,
          duration = 400,
          timer;
      if(options.onMobile) {
        el.slick(that.options);
        $(window).on('orientationchange.' + pluginName, function() {
          clearTimeout(timer);
          timer = setTimeout(function() {
            if(!Site.isMobile()) {
              if(el.hasClass('slick-slider')) {
                el.slick('unslick');
              }
            } else {
              el.slick(that.options);
            }
          }, duration);
        });
      } else {
        el.slick(that.options);
      }
    },

    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true
        }
      }
    ]
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));
