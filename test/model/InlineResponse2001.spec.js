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
    describe('InlineResponse2001', function() {
      beforeEach(function() {
        instance = new BillaBear.InlineResponse2001();
      });

      it('should create an instance of InlineResponse2001', function() {
        // TODO: update the code to test InlineResponse2001
        expect(instance).to.be.a(BillaBear.InlineResponse2001);
      });

      it('should have the property limits (base name: "limits")', function() {
        // TODO: update the code to test the property limits
        expect(instance).to.have.property('limits');
        // expect(instance.limits).to.be(expectedValueLiteral);
      });

      it('should have the property features (base name: "features")', function() {
        // TODO: update the code to test the property features
        expect(instance).to.have.property('features');
        // expect(instance.features).to.be(expectedValueLiteral);
      });

      it('should have the property userCount (base name: "user_count")', function() {
        // TODO: update the code to test the property userCount
        expect(instance).to.have.property('userCount');
        // expect(instance.userCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
