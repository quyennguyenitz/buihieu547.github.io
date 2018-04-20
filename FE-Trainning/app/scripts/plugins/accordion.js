/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */
// ;(function($, window, undefined) {
//   'use strict';

//   var pluginName = 'accordion';
//   var win = $(window);

//   function Plugin(element, options) {
//     this.element = $(element);
//     this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
//     this.init();
//   }

//   Plugin.prototype = {
//     init: function() {
//       var that = this,
//           el = that.element,
//           btn = el.next('[data-see-btn]'),
//           content = el.find('[data-acc-content]'),
//           title = el.find('[data-acc-title]'),
//           accBlock = el.find('[data-acc-block]');

//       win.on('resize', function(){
//         if(Site.isDesktop()){
//           content.show();
//           accBlock.hide();
//           btn.show();
//         }
//         else {
//           content.hide();
//           btn.hide();
//         }
//       });

//       if (Site.isDesktop()){
//           content.show();
//           accBlock.hide();
//           btn.on('click', function(){
//             accBlock.slideToggle(0);
//             btn.children('.icon-chevron-up').toggleClass('active');
//           });
//         }
//         else {
//           content.hide();
//           accBlock.show();
//           btn.hide();
//           title.on('click', function(){
//             $(this).next('[data-acc-content]').toggle(0);
//             $(this).children('.icon-chevron-down').toggleClass('active');
//           });
//         }


//     },

//     destroy: function() {
//       // remove events
//       // deinitialize
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

//   $.fn[pluginName].defaults = {
//     key: 'value',
//     onCallback: null
//   };

//   $(function() {
//     $('[data-' + pluginName + ']').on('customEvent', function() {
//       // to do
//     });

//     $('[data-' + pluginName + ']')[pluginName]({
//       key: 'custom'
//     });
//   });

// }(jQuery, window));
