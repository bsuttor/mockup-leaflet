/* Leaflet
 *
 * Options:
 *    text(string): The text, which should be shown.
 *
 * Documentation:
 *   # Leaflet
 *
 *   This is an example pattern, which does nothing but chaning the text of
 *   the selected element.
 *
 *   # Default text example
 *
 *   {{ example-1 }}
 *
 *   # Custom text example
 *
 *   {{ example-2 }}
 *
 * Example: example-1
 *    <div class="pat-leaflet"></div>
 *
 * Example: example-2
 *    <div class="pat-leaflet" data-pat-leaflet='{"text": "whats up?"}'></div>
 * 
 */

define([
  'pat-base',
  'jquery'
], function (Base, $) {
  'use strict';

  var Leaflet = Base.extend({
    name: 'leaflet',
    trigger: '.pat-leaflet',  // has to be exact like this: 'pat-' + patternname.
    defaults: {
      text: 'Super Duper!'
    },
    init: function () {
      var self = this;
      self.$el.html(self.options.text);
    }
  });
  return Leaflet;
});
