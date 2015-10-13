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
      mapcenterlat: "50.636",
      mapcenterlon: "5.566",
      mapzoom: "13"
    },
    init: function () {
      var self = this,
        $el = self.$el,
        map,
        baseLayers,
        mapcenterlat = self.options.mapcenterlat,
        mapcenterlon = self.options.mapcenterlon,
        mapzoom = self.options.mapzoom;

      //debugger;
      map = new L.map($el[0]);
      map.setView([mapcenterlat, mapcenterlon], mapzoom);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  });
  return Leaflet;
});
