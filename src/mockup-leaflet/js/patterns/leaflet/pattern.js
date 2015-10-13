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
      'mockup-patterns-base',
      'leaflet',
], function (Base, L) {
  'use strict';

  var Leaflet = Base.extend({
    name: 'leaflet',
    trigger: '.pat-leaflet',  // has to be exact like this: 'pat-' + patternname.
    defaults: {
      text: 'Super Duper!'
    },
    init: function () {
      var self = this,
        $el = self.$el,
        map,
        baseLayers;

      L = window.L; // have to use window.L - leaflet registers anonymous amd module and does not return global L...?

      //debugger;
      map = new L.map($el[0]);
      map.setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  });
  return Leaflet;
});
