define([
  'expect',
  'jquery',
  'pat-registry',
  'mockup-patterns-leaflet',
], function(expect, $, registry, leaflet) {
  'use strict';

  window.mocha.setup('bdd');
  $.fx.off = true;

  describe('Leaflet', function () {

    afterEach(function() {
      $('body').empty();
    });

    it('Just works.', function() {

      var $doc = $('<div class="pat-leaflet"></div>').appendTo('body');
      registry.scan($doc);

      setTimeout(function () {
        // wait for two seconds, until all is settled.
        // TODO: use event listener instead.
        var $el = $('.pat-leaflet');
        expect($el.text()).to.be.equal("Super Duper!");
      }, 2000);

    });

  });
});
