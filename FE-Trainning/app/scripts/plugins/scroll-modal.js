// ;(function($, window, undefined) {
//   'use strict';

//   var pluginName = 'scroll-modal';

//   function Plugin(element, options) {
//     this.element = $(element);
//     this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
//     this.init();
//   }

//   Plugin.prototype = {
//     init: function() {
//       var that = this;

//       that.scrollModal();
//       that.loadModal();
//     },

//     loadModal: function() {
//       var that = this,
//           el  = that.element,
//           closeModal = el.find('[data-modal-close]');

//       closeModal.on('click.closeModal', function(){
//         el.addClass('hidden');
//         el.trigger('hidden.modal');
//       });
//     },

//     scrollModal: function() {
//       var that = this,
//           el = that.element,
//           scrollBar = el.find('[data-scroll]');
//       scrollBar.slimScroll({
//         height: '100%',
//         color: '#0073da',
//         alwaysVisible: true,
//         railColor: '#ccc',
//         railVisible: true,
//         railOpacity: 1,
//         size: '9px',
//         wheelStep: 50,
//         touchScrollStep: 50
//       });
//     },

//     destroy: function() {
//       $.removeData(this.element[0], pluginName);
//     }
//   };

//   $.fn[pluginName] = function(options, params) {
//     return this.each(function() {
//       var instance = $.data(this, pluginName);
//       if (!instance) {
//         $.data(this, pluginName, new Plugin(this, options));
//       } else if (instance[options]) {
//         instance[options](params);
//       }
//     });
//   };

//   $(function() {
//     $('[data-' + pluginName + ']')[pluginName]();

//     $('[data-modal-open]').on('click.openModal', function(e){
//       e.preventDefault();
//       var idModal = $(this).attr('id'),
//         other = $('[data-id-item]'),
//         el = $('[data-id-item="' + idModal + '"]');

//       if(!el.length) {
//         return;
//       }
//       other.each(function() {
//         $(this).addClass('hidden');
//       });
//       el.removeClass('hidden');
//     });
//   });
// }(jQuery, window));
