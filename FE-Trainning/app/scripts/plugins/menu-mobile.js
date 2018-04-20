;( function( $, window, document, undefined ) {
  'use strict';
  var pluginName = 'menu-mobile';
  var config = {};

  function Plugin ( element, options ) {
    this.element = $(element);
    $.extend(config, $.fn[pluginName].defaults, this.element.data(), options);
    this.navBtn = $(config.navBtn);
    this.window = $(window);
    this.active = false;
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      this.navBtn.on('click', this.toggle.bind(this));
      this.element.on('click', this.preventEventBody.bind(this));
      this.window.on('click', this.clickBody.bind(this));
      this.window.on('resize', this.resize.bind(this));
      this.element.find('.accordion-toggle').click(this.showSubMenu);
    },
    toggle: function(e) {
      e.stopPropagation();
      this.element.slideToggle(config.toggleDuration);
      this.active = !this.active;
    },
    resize: function() {
      var plugin = this;
      setTimeout(function(){
        if(plugin.window.width() > config.deviceSupport) {
          plugin.element.css('display', 'none');
          plugin.active = false;
        }
      });
    },
    preventEventBody: function(e) {
      e.stopPropagation();
    },
    clickBody: function() {
      if(this.active) {
        this.element.slideToggle(config.toggleDuration);
        this.active = false;
      }
    },
    showSubMenu: function() {
      $(this).parent().find('> ul').slideToggle(config.toggleDuration);
      $(this).toggleClass('toggle-rotate');
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
    navBtn: '#navBtn',
    toggleDuration: 500,
    deviceSupport: 768
  };
  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });
} )( jQuery, window, document );