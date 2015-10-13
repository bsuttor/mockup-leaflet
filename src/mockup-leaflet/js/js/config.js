/* RequireJS configuration */
/* global module:true */

(function() {
  'use strict';

  var requirejsOptions = {
    baseUrl: './',
    optimize: 'none',
    paths: {
      'mockup-bundles-leaflet': 'js/bundles/leaflet',
      'mockup-patterns-leaflet': 'patterns/leaflet/pattern',
      // FRAMEWORK DEPENDENCIES
      'leaflet': 'bower_components/leaflet/dist/leaflet-src'
    },
    shim: {
      leaflet: {
        exports: 'L'
      },
    }
  };

  if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    module.exports = requirejsOptions;
  }
  if (typeof requirejs !== 'undefined' && requirejs.config) {
    requirejs.config(requirejsOptions);
  }

}());
