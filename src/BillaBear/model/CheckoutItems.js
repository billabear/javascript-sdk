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
import ApiClient from '../ApiClient';

/**
 * The CheckoutItems model module.
 * @module BillaBear/model/CheckoutItems
 * @version 1.0.0
 */
export default class CheckoutItems {
  /**
   * Constructs a new <code>CheckoutItems</code>.
   * @alias module:BillaBear/model/CheckoutItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CheckoutItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/CheckoutItems} obj Optional instance to populate.
   * @return {module:BillaBear/model/CheckoutItems} The populated <code>CheckoutItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CheckoutItems();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('include_tax'))
        obj.includeTax = ApiClient.convertToType(data['include_tax'], 'Boolean');
      if (data.hasOwnProperty('tax_type'))
        obj.taxType = ApiClient.convertToType(data['tax_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
CheckoutItems.prototype.description = undefined;

/**
 * @member {Number} amount
 */
CheckoutItems.prototype.amount = undefined;

/**
 * @member {String} currency
 */
CheckoutItems.prototype.currency = undefined;

/**
 * @member {Boolean} includeTax
 */
CheckoutItems.prototype.includeTax = undefined;

/**
 * @member {String} taxType
 */
CheckoutItems.prototype.taxType = undefined;

