;( function( $, window, document, undefined ) {
  'use strict';
  var pluginName = 'animated';

  var config = {};

  function Plugin ( element, options ) {
    this.element = $(element);
    $.extend(config, $.fn[pluginName].defaults, this.element.data(), options);
    this.element.addClass('animated-hidden');
    this.boxSize = {
      height: $(config.scrollBox).height(),
      width: $(config.scrollBox).width()
    };
    this.init();
  }
  $.extend( Plugin.prototype, {
    init: function() {
      $(config.scrollBox).on('load scroll', this.checkElements.bind(this));
      $(window).on('resize', this.resize.bind(this));
    },
    checkElements: function() {
      var viewportStart, viewportEnd;
      viewportStart = Math.max(
        $('html').scrollTop(),
        $('body').scrollTop(),
        $(window).scrollTop()
      );
      viewportEnd = (viewportStart + this.boxSize.height);

      this.element.each(function() {
        var obj = $(this),
          elemStart = Math.round(obj.offset().top) + config.offset,
          elemEnd =  elemStart + obj.height();

        if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
          obj.addClass(config.classAnimate + ' ' + obj.attr(config.attribute));
        }
      });
    },
    resize: function() {
      this.boxSize = {
        height: $(config.scrollBox).height(),
        width: $(config.scrollBox).width()
      };
      this.checkElements();
    }
  } );
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
    scrollBox: window,
    attribute: 'animated',
    classAnimate: 'animated',
    offset: 100
  };
  $(function() {
    $('[' + pluginName + ']')[pluginName]();
  });

} )( jQuery, window, document );