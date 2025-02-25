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
import Customer from './Customer';
import InlineResponse2009Receipts from './InlineResponse2009Receipts';

/**
 * The InlineResponse2009Data model module.
 * @module BillaBear/model/InlineResponse2009Data
 * @version 1.0.0
 */
export default class InlineResponse2009Data {
  /**
   * Constructs a new <code>InlineResponse2009Data</code>.
   * @alias module:BillaBear/model/InlineResponse2009Data
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2009Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse2009Data} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse2009Data} The populated <code>InlineResponse2009Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2009Data();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('external_reference'))
        obj.externalReference = ApiClient.convertToType(data['external_reference'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('customer'))
        obj.customer = Customer.constructFromObject(data['customer']);
      if (data.hasOwnProperty('receipts'))
        obj.receipts = ApiClient.convertToType(data['receipts'], [InlineResponse2009Receipts]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
InlineResponse2009Data.prototype.id = undefined;

/**
 * @member {Number} amount
 */
InlineResponse2009Data.prototype.amount = undefined;

/**
 * Three-letter ISO currency code. Must be upper-case
 * @member {String} currency
 */
InlineResponse2009Data.prototype.currency = undefined;

/**
 * @member {String} externalReference
 */
InlineResponse2009Data.prototype.externalReference = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2009Data.StatusEnum = {
  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "disputed"
   * @const
   */
  disputed: "disputed",

  /**
   * value: "partially_refunded"
   * @const
   */
  partiallyRefunded: "partially_refunded",

  /**
   * value: "fully_refunded"
   * @const
   */
  fullyRefunded: "fully_refunded"
};
/**
 * @member {module:BillaBear/model/InlineResponse2009Data.StatusEnum} status
 */
InlineResponse2009Data.prototype.status = undefined;

/**
 * @member {String} createdAt
 */
InlineResponse2009Data.prototype.createdAt = undefined;

/**
 * @member {module:BillaBear/model/Customer} customer
 */
InlineResponse2009Data.prototype.customer = undefined;

/**
 * @member {Array.<module:BillaBear/model/InlineResponse2009Receipts>} receipts
 */
InlineResponse2009Data.prototype.receipts = undefined;

