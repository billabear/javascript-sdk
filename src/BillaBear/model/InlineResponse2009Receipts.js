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
 * The InlineResponse2009Receipts model module.
 * @module BillaBear/model/InlineResponse2009Receipts
 * @version 1.0.0
 */
export default class InlineResponse2009Receipts {
  /**
   * Constructs a new <code>InlineResponse2009Receipts</code>.
   * @alias module:BillaBear/model/InlineResponse2009Receipts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2009Receipts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse2009Receipts} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse2009Receipts} The populated <code>InlineResponse2009Receipts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2009Receipts();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} createdAt
 */
InlineResponse2009Receipts.prototype.createdAt = undefined;

/**
 * @member {String} id
 */
InlineResponse2009Receipts.prototype.id = undefined;

/**
 * @member {Boolean} valid
 */
InlineResponse2009Receipts.prototype.valid = undefined;

