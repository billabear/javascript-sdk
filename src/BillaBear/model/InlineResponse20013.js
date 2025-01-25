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
 * The InlineResponse20013 model module.
 * @module BillaBear/model/InlineResponse20013
 * @version 1.0.0
 */
export default class InlineResponse20013 {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:BillaBear/model/InlineResponse20013
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse20013} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20013();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} success
 */
InlineResponse20013.prototype.success = undefined;

