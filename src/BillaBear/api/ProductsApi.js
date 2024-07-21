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
import InlineResponse2008 from '../model/InlineResponse2008';
import Product from '../model/Product';

/**
* Products service.
* @module BillaBear/api/ProductsApi
* @version 1.0.0
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:BillaBear/api/ProductsApi
    * @class
    * @param {module:BillaBear/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:BillaBear/ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback moduleBillaBear/api/ProductsApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Create a product
     * @param {module:BillaBear/model/Product} body 
     * @param {module:BillaBear/api/ProductsApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createProduct(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProduct");
      }

      let pathParams = {
        
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
      let returnType = 'String';

      return this.apiClient.callApi(
        '/product', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listProduct operation.
     * @callback moduleBillaBear/api/ProductsApi~listProductCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/InlineResponse2008{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List all products
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {String} opts.lastKey The key to be used in pagination to say what the last key of the previous page was
     * @param {String} opts.name The name to search for
     * @param {module:BillaBear/api/ProductsApi~listProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listProduct(opts, callback) {
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
      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/product', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the showProductById operation.
     * @callback moduleBillaBear/api/ProductsApi~showProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Product{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detail
     * Info for a specific product
     * @param {String} productId The id of the product to retrieve
     * @param {module:BillaBear/api/ProductsApi~showProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    showProductById(productId, callback) {
      
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling showProductById");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = Product;

      return this.apiClient.callApi(
        '/product/{productId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback moduleBillaBear/api/ProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:BillaBear/model/Product{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update
     * Update a product
     * @param {String} productId The id of the product to retrieve
     * @param {module:BillaBear/api/ProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateProduct(productId, callback) {
      
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateProduct");
      }

      let pathParams = {
        'productId': productId
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
      let returnType = Product;

      return this.apiClient.callApi(
        '/product/{productId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}