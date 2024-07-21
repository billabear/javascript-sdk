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
    describe('Address', function() {
      beforeEach(function() {
        instance = new BillaBear.Address();
      });

      it('should create an instance of Address', function() {
        // TODO: update the code to test Address
        expect(instance).to.be.a(BillaBear.Address);
      });

      it('should have the property companyName (base name: "company_name")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property streetLineOne (base name: "street_line_one")', function() {
        // TODO: update the code to test the property streetLineOne
        expect(instance).to.have.property('streetLineOne');
        // expect(instance.streetLineOne).to.be(expectedValueLiteral);
      });

      it('should have the property streetLineTwo (base name: "street_line_two")', function() {
        // TODO: update the code to test the property streetLineTwo
        expect(instance).to.have.property('streetLineTwo');
        // expect(instance.streetLineTwo).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property postcode (base name: "postcode")', function() {
        // TODO: update the code to test the property postcode
        expect(instance).to.have.property('postcode');
        // expect(instance.postcode).to.be(expectedValueLiteral);
      });

    });
  });

}));