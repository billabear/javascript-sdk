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
import ApiClient from '../ApiClient';

/**
 * The PaymentDetails model module.
 * @module BillaBear/model/PaymentDetails
 * @version 1.0.0
 */
export default class PaymentDetails {
  /**
   * Constructs a new <code>PaymentDetails</code>.
   * @alias module:BillaBear/model/PaymentDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/PaymentDetails} obj Optional instance to populate.
   * @return {module:BillaBear/model/PaymentDetails} The populated <code>PaymentDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentDetails();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('default'))
        obj._default = ApiClient.convertToType(data['default'], 'Boolean');
      if (data.hasOwnProperty('brand'))
        obj.brand = ApiClient.convertToType(data['brand'], 'String');
      if (data.hasOwnProperty('last_four'))
        obj.lastFour = ApiClient.convertToType(data['last_four'], 'String');
      if (data.hasOwnProperty('expiry_month'))
        obj.expiryMonth = ApiClient.convertToType(data['expiry_month'], 'String');
      if (data.hasOwnProperty('expiry_year'))
        obj.expiryYear = ApiClient.convertToType(data['expiry_year'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
PaymentDetails.prototype.id = undefined;

/**
 * @member {String} name
 */
PaymentDetails.prototype.name = undefined;

/**
 * @member {Boolean} _default
 */
PaymentDetails.prototype._default = undefined;

/**
 * @member {String} brand
 */
PaymentDetails.prototype.brand = undefined;

/**
 * @member {String} lastFour
 */
PaymentDetails.prototype.lastFour = undefined;

/**
 * @member {String} expiryMonth
 */
PaymentDetails.prototype.expiryMonth = undefined;

/**
 * @member {String} expiryYear
 */
PaymentDetails.prototype.expiryYear = undefined;

/**
 * @member {String} createdAt
 */
PaymentDetails.prototype.createdAt = undefined;

