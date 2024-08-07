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
    instance = new BillaBear.SubscriptionsApi();
  });

  describe('BillaBear', function() {
    describe('SubscriptionsApi', function() {
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
      describe('cancelSubscription', function() {
        it('should call cancelSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for cancelSubscription call and complete the assertions
          /*

          instance.cancelSubscription(body, subscriptionId, function(error, data, response) {
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
      describe('changeSubscriptionPrice', function() {
        it('should call changeSubscriptionPrice successfully', function(done) {
          // TODO: uncomment, update parameter values for changeSubscriptionPrice call and complete the assertions
          /*

          instance.changeSubscriptionPrice(body, subscriptionId, function(error, data, response) {
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
      describe('createSubscription', function() {
        it('should call createSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for createSubscription call and complete the assertions
          /*

          instance.createSubscription(body, customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Subscription);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('customerChangeSubscriptionPlan', function() {
        it('should call customerChangeSubscriptionPlan successfully', function(done) {
          // TODO: uncomment, update parameter values for customerChangeSubscriptionPlan call and complete the assertions
          /*

          instance.customerChangeSubscriptionPlan(body, subscriptionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Subscription);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('extendTrial', function() {
        it('should call extendTrial successfully', function(done) {
          // TODO: uncomment, update parameter values for extendTrial call and complete the assertions
          /*

          instance.extendTrial(body, subscriptionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Subscription);

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
      describe('listSubscriptionPlans', function() {
        it('should call listSubscriptionPlans successfully', function(done) {
          // TODO: uncomment, update parameter values for listSubscriptionPlans call and complete the assertions
          /*
          var opts = {};

          instance.listSubscriptionPlans(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.InlineResponse20010);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSubscriptions', function() {
        it('should call listSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for listSubscriptions call and complete the assertions
          /*
          var opts = {};

          instance.listSubscriptions(opts, function(error, data, response) {
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
      describe('showSubscriptionById', function() {
        it('should call showSubscriptionById successfully', function(done) {
          // TODO: uncomment, update parameter values for showSubscriptionById call and complete the assertions
          /*

          instance.showSubscriptionById(subscriptionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Subscription);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('startTrial', function() {
        it('should call startTrial successfully', function(done) {
          // TODO: uncomment, update parameter values for startTrial call and complete the assertions
          /*

          instance.startTrial(body, customerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BillaBear.Subscription);

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
