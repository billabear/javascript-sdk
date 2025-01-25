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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse20012 from '../model/InlineResponse20012';
import InlineResponse20013 from '../model/InlineResponse20013';
import InlineResponse2008 from '../model/InlineResponse2008';
import SeatsAddBody from '../model/SeatsAddBody';
import SeatsRemoveBody from '../model/SeatsRemoveBody';
import Subscription from '../model/Subscription';
import SubscriptionIdCancelBody from '../model/SubscriptionIdCancelBody';
import SubscriptionIdExtendBody from '../model/SubscriptionIdExtendBody';
import SubscriptionIdPlanBody from '../model/SubscriptionIdPlanBody';
import SubscriptionIdPriceBody from '../model/SubscriptionIdPriceBody';
import SubscriptionStartBody from '../model/SubscriptionStartBody';
import SubscriptionTrialBody from '../model/SubscriptionTrialBody';

/**
* Subscriptions service.
* @module BillaBear/api/SubscriptionsApi
* @version 1.0.0
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:BillaBear/api/SubscriptionsApi
    * @class
    * @param {module:BillaBear/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:BillaBear/ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addSeatsSubscriptions operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~addSeatsSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Seats
     * Adds seats to a per seat subscription&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1.4&lt;/strong&gt;
     * @param {module:BillaBear/model/SeatsAddBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~addSeatsSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addSeatsSubscriptions(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addSeatsSubscriptions");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling addSeatsSubscriptions");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/seats/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cancelSubscription operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~cancelSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel Subscription
     * Info for a specific subscription
     * @param {module:BillaBear/model/SubscriptionIdCancelBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~cancelSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    cancelSubscription(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cancelSubscription");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cancelSubscription");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the changeSubscriptionPrice operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~changeSubscriptionPriceCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change Price
     * Changes the price being used for a price. Useful for changing pricing schedule or just price.
     * @param {module:BillaBear/model/SubscriptionIdPriceBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~changeSubscriptionPriceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    changeSubscriptionPrice(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling changeSubscriptionPrice");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling changeSubscriptionPrice");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/price', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Subscription
     * Create subscription for a customer
     * @param {module:BillaBear/model/SubscriptionStartBody} body 
     * @param {String} customerId The id of the customer to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createSubscription(body, customerId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSubscription");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling createSubscription");
      }

      let pathParams = {
        'customerId': customerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/customer/{customerId}/subscription/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the customerChangeSubscriptionPlan operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~customerChangeSubscriptionPlanCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change Subscription Plan
     * Change the subscription plan for a customer
     * @param {module:BillaBear/model/SubscriptionIdPlanBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~customerChangeSubscriptionPlanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    customerChangeSubscriptionPlan(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling customerChangeSubscriptionPlan");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling customerChangeSubscriptionPlan");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/plan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the extendTrial operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~extendTrialCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend Trial Subscription
     * Extend a trial subscription so it&#x27;s converted from a trial to a normal subscription.
     * @param {module:BillaBear/model/SubscriptionIdExtendBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~extendTrialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    extendTrial(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling extendTrial");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling extendTrial");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/extend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getActiveForCustomer operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~getActiveForCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2008{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Customer Active Subscriptions
     * List all Active customer subscriptions
     * @param {String} customerId The id of the customer to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~getActiveForCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getActiveForCustomer(customerId, callback) {
      
      let postBody = null;
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getActiveForCustomer");
      }

      let pathParams = {
        'customerId': customerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/customer/{customerId}/subscription/active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getForCustomer operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~getForCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2008{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Customer Subscriptions
     * List all customer subscriptions&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1&lt;/strong&gt;
     * @param {String} customerId The id of the customer to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~getForCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getForCustomer(customerId, callback) {
      
      let postBody = null;
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getForCustomer");
      }

      let pathParams = {
        'customerId': customerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/customer/{customerId}/subscription', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSubscriptionPlans operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~listSubscriptionPlansCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse20012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Subscription Plans
     * List all subscriptions plans
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {String} opts.lastKey The key to be used in pagination to say what the last key of the previous page was
     * @param {module:BillaBear/api/SubscriptionsApi~listSubscriptionPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSubscriptionPlans(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'last_key': opts['lastKey']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20012;

      return this.apiClient.callApi(
        '/subscription/plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listSubscriptions operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~listSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2008{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List all subscriptions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {String} opts.lastKey The key to be used in pagination to say what the last key of the previous page was
     * @param {module:BillaBear/api/SubscriptionsApi~listSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listSubscriptions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'last_key': opts['lastKey']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/subscription', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the removeSeatsSubscriptions operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~removeSeatsSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Seats
     * Remove seats to a per seat subscription&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1.4&lt;/strong&gt;
     * @param {module:BillaBear/model/SeatsRemoveBody} body 
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~removeSeatsSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    removeSeatsSubscriptions(body, subscriptionId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeSeatsSubscriptions");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling removeSeatsSubscriptions");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}/seats/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the showSubscriptionById operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~showSubscriptionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detail
     * Info for a specific subscription
     * @param {String} subscriptionId The id of the subscription to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~showSubscriptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    showSubscriptionById(subscriptionId, callback) {
      
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling showSubscriptionById");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/subscription/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the startTrial operation.
     * @callback moduleBillaBear/api/SubscriptionsApi~startTrialCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Subscription{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start Trial Subscription For Customer
     * Start subscription for a customer
     * @param {module:BillaBear/model/SubscriptionTrialBody} body 
     * @param {String} customerId The id of the customer to retrieve
     * @param {module:BillaBear/api/SubscriptionsApi~startTrialCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    startTrial(body, customerId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling startTrial");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling startTrial");
      }

      let pathParams = {
        'customerId': customerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Subscription;

      return this.apiClient.callApi(
        '/customer/{customerId}/subscription/trial', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}