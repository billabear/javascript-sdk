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
import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse2002 from '../model/InlineResponse2002';
import Refund from '../model/Refund';

/**
* Refunds service.
* @module BillaBear/api/RefundsApi
* @version 1.0.0
*/
export default class RefundsApi {

    /**
    * Constructs a new RefundsApi. 
    * @alias module:BillaBear/api/RefundsApi
    * @class
    * @param {module:BillaBear/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:BillaBear/ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getRefundsForCustomer operation.
     * @callback moduleBillaBear/api/RefundsApi~getRefundsForCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Customer Refunds
     * List Customer Refund
     * @param {String} customerId The id of the customer to retrieve
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {String} opts.lastKey The key to be used in pagination to say what the last key of the previous page was
     * @param {String} opts.name The name to search for
     * @param {module:BillaBear/api/RefundsApi~getRefundsForCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRefundsForCustomer(customerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getRefundsForCustomer");
      }

      let pathParams = {
        'customerId': customerId
      };
      let queryParams = {
        'limit': opts['limit'],'last_key': opts['lastKey'],'name': opts['name']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/customer/{customerId}/refund', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listRefund operation.
     * @callback moduleBillaBear/api/RefundsApi~listRefundCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List all refund
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {String} opts.lastKey The key to be used in pagination to say what the last key of the previous page was
     * @param {String} opts.name The name to search for
     * @param {module:BillaBear/api/RefundsApi~listRefundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listRefund(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'limit': opts['limit'],'last_key': opts['lastKey'],'name': opts['name']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/refund', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the showRefundById operation.
     * @callback moduleBillaBear/api/RefundsApi~showRefundByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Refund{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detail
     * Info for a specific Refund
     * @param {String} refundId The id of the refund
     * @param {module:BillaBear/api/RefundsApi~showRefundByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    showRefundById(refundId, callback) {
      
      let postBody = null;
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling showRefundById");
      }

      let pathParams = {
        'refundId': refundId
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
      let returnType = Refund;

      return this.apiClient.callApi(
        '/refund/{refundId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}