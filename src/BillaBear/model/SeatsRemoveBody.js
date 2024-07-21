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
 * The SeatsRemoveBody model module.
 * @module BillaBear/model/SeatsRemoveBody
 * @version 1.0.0
 */
export default class SeatsRemoveBody {
  /**
   * Constructs a new <code>SeatsRemoveBody</code>.
   * @alias module:BillaBear/model/SeatsRemoveBody
   * @class
   * @param seats {Number} 
   */
  constructor(seats) {
    this.seats = seats;
  }

  /**
   * Constructs a <code>SeatsRemoveBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/SeatsRemoveBody} obj Optional instance to populate.
   * @return {module:BillaBear/model/SeatsRemoveBody} The populated <code>SeatsRemoveBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SeatsRemoveBody();
      if (data.hasOwnProperty('seats'))
        obj.seats = ApiClient.convertToType(data['seats'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} seats
 */
SeatsRemoveBody.prototype.seats = undefined;

