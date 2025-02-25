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
 * The SeatsAddBody model module.
 * @module BillaBear/model/SeatsAddBody
 * @version 1.0.0
 */
export default class SeatsAddBody {
  /**
   * Constructs a new <code>SeatsAddBody</code>.
   * @alias module:BillaBear/model/SeatsAddBody
   * @class
   * @param seats {Number} 
   */
  constructor(seats) {
    this.seats = seats;
  }

  /**
   * Constructs a <code>SeatsAddBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/SeatsAddBody} obj Optional instance to populate.
   * @return {module:BillaBear/model/SeatsAddBody} The populated <code>SeatsAddBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SeatsAddBody();
      if (data.hasOwnProperty('seats'))
        obj.seats = ApiClient.convertToType(data['seats'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} seats
 */
SeatsAddBody.prototype.seats = undefined;

