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
import UsageLimit from './UsageLimit';

/**
 * The InlineResponse2005 model module.
 * @module BillaBear/model/InlineResponse2005
 * @version 1.0.0
 */
export default class InlineResponse2005 {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:BillaBear/model/InlineResponse2005
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2005();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [UsageLimit]);
      if (data.hasOwnProperty('has_more'))
        obj.hasMore = ApiClient.convertToType(data['has_more'], 'Boolean');
      if (data.hasOwnProperty('last_key'))
        obj.lastKey = ApiClient.convertToType(data['last_key'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:BillaBear/model/UsageLimit>} data
 */
InlineResponse2005.prototype.data = undefined;

/**
 * @member {Boolean} hasMore
 */
InlineResponse2005.prototype.hasMore = undefined;

/**
 * @member {String} lastKey
 */
InlineResponse2005.prototype.lastKey = undefined;

