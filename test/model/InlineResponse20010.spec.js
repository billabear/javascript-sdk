/*
 * BillaBear
 * The REST API provided by BillaBear
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@billabear.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.56
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/BillaBear/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/BillaBear/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BillaBear);
  }
}(this, function(expect, BillaBear) {
  'use strict';

  var instance;

  describe('BillaBear', function() {
    describe('InlineResponse20010', function() {
      beforeEach(function() {
        instance = new BillaBear.InlineResponse20010();
      });

      it('should create an instance of InlineResponse20010', function() {
        // TODO: update the code to test InlineResponse20010
        expect(instance).to.be.a(BillaBear.InlineResponse20010);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property hasMore (base name: "has_more")', function() {
        // TODO: update the code to test the property hasMore
        expect(instance).to.have.property('hasMore');
        // expect(instance.hasMore).to.be(expectedValueLiteral);
      });

      it('should have the property lastKey (base name: "last_key")', function() {
        // TODO: update the code to test the property lastKey
        expect(instance).to.have.property('lastKey');
        // expect(instance.lastKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
