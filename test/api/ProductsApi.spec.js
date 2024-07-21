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

  beforeEach(function() {
    instance = new BillaBear.ProductsApi();
  });

  describe('BillaBear', function() {
    describe('ProductsApi', function() {
      describe('createProduct', function() {
        it('should call createProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for createProduct call and complete the assertions
          /*

          instance.createProduct(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(&#x27;string&#x27;);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listProduct', function() {
        it('should call listProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for listProduct call and complete the assertions
          /*
          var opts = {};

          instance.listProduct(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('showProductById', function() {
        it('should call showProductById successfully', function(done) {
          // TODO: uncomment, update parameter values for showProductById call and complete the assertions
          /*

          instance.showProductById(productId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Product);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProduct', function() {
        it('should call updateProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProduct call and complete the assertions
          /*

          instance.updateProduct(productId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Product);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
