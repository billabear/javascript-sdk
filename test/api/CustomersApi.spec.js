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
    instance = new BillaBear.CustomersApi();
  });

  describe('BillaBear', function() {
    describe('CustomersApi', function() {
      describe('addSeatsSubscriptions', function() {
        it('should call addSeatsSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for addSeatsSubscriptions call and complete the assertions
          /*

          instance.addSeatsSubscriptions(body, subscriptionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('applyVoucherToCustomer', function() {
        it('should call applyVoucherToCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for applyVoucherToCustomer call and complete the assertions
          /*

          instance.applyVoucherToCustomer(body, customerId, function(error, data, response) {
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
      describe('createCustomer', function() {
        it('should call createCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for createCustomer call and complete the assertions
          /*

          instance.createCustomer(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Customer);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('disableCustomer', function() {
        it('should call disableCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for disableCustomer call and complete the assertions
          /*

          instance.disableCustomer(customerId, function(error, data, response) {
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
      describe('enableCustomer', function() {
        it('should call enableCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for enableCustomer call and complete the assertions
          /*

          instance.enableCustomer(customerId, function(error, data, response) {
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
      describe('getActiveForCustomer', function() {
        it('should call getActiveForCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for getActiveForCustomer call and complete the assertions
          /*

          instance.getActiveForCustomer(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2006);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllCustomers', function() {
        it('should call getAllCustomers successfully', function(done) {
          // TODO: uncomment, update parameter values for getAllCustomers call and complete the assertions
          /*
          var opts = {};

          instance.getAllCustomers(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCustomerById', function() {
        it('should call getCustomerById successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomerById call and complete the assertions
          /*

          instance.getCustomerById(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Customer);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCustomerLimitsById', function() {
        it('should call getCustomerLimitsById successfully', function(done) {
          // TODO: uncomment, update parameter values for getCustomerLimitsById call and complete the assertions
          /*

          instance.getCustomerLimitsById(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getForCustomer', function() {
        it('should call getForCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for getForCustomer call and complete the assertions
          /*

          instance.getForCustomer(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2006);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getInvoicesForCustomer', function() {
        it('should call getInvoicesForCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for getInvoicesForCustomer call and complete the assertions
          /*

          instance.getInvoicesForCustomer(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2004);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPaymentsForCustomer', function() {
        it('should call getPaymentsForCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for getPaymentsForCustomer call and complete the assertions
          /*
          var opts = {};

          instance.getPaymentsForCustomer(customerId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2003);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRefundsForCustomer', function() {
        it('should call getRefundsForCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for getRefundsForCustomer call and complete the assertions
          /*
          var opts = {};

          instance.getRefundsForCustomer(customerId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listPaymentDetails', function() {
        it('should call listPaymentDetails successfully', function(done) {
          // TODO: uncomment, update parameter values for listPaymentDetails call and complete the assertions
          /*

          instance.listPaymentDetails(customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse2005);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeSeatsSubscriptions', function() {
        it('should call removeSeatsSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for removeSeatsSubscriptions call and complete the assertions
          /*

          instance.removeSeatsSubscriptions(body, subscriptionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse20011);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateCustomer', function() {
        it('should call updateCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for updateCustomer call and complete the assertions
          /*

          instance.updateCustomer(body, customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Customer);

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
