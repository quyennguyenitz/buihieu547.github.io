;( function( $, window, document, undefined ) {
  'use strict';
  var pluginName = 'count';

  var config = {};

  function Plugin ( element, options ) {
    this.element = $(element);
    $.extend(config, $.fn[pluginName].defaults, this.element.data(), options);
    this.doc = $(window);
    this.init();
  }
  $.extend( Plugin.prototype, {
    init: function() {
      this.doc.on('scroll', this.startCounter.bind(this));
    },
    startCounter: function() {
      if (this.doc.scrollTop() > config.offset) {
        this.element.each(function () {
          var obj = $(this);

          if(obj.hasClass('count-complete')) {
            return false;
          }

          obj.addClass('count-complete');

          $({ Counter: 0 }).animate({ Counter: obj.attr('data-count') }, {
            duration: config.duration,
            easing: config.easing,
            step: function () {
              obj.text(Math.ceil(this.Counter));
            }
          });
        });
      }
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
    duration: 5000,
    offset: 200,
    easing: 'swing'
  };
  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
} )( jQuery, window, document );