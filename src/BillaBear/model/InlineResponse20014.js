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
 * The InlineResponse20014 model module.
 * @module BillaBear/model/InlineResponse20014
 * @version 1.0.0
 */
export default class InlineResponse20014 {
  /**
   * Constructs a new <code>InlineResponse20014</code>.
   * @alias module:BillaBear/model/InlineResponse20014
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse20014} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20014();
      if (data.hasOwnProperty('paid'))
        obj.paid = ApiClient.convertToType(data['paid'], 'Boolean');
      if (data.hasOwnProperty('failure_reason'))
        obj.failureReason = ApiClient.convertToType(data['failure_reason'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} paid
 */
InlineResponse20014.prototype.paid = undefined;

/**
 * Allowed values for the <code>failureReason</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20014.FailureReasonEnum = {
  /**
   * value: "expired_card"
   * @const
   */
  expiredCard: "expired_card",

  /**
   * value: "invalid_details"
   * @const
   */
  invalidDetails: "invalid_details",

  /**
   * value: "fraud"
   * @const
   */
  fraud: "fraud",

  /**
   * value: "authentication_required"
   * @const
   */
  authenticationRequired: "authentication_required",

  /**
   * value: "invalid_card"
   * @const
   */
  invalidCard: "invalid_card",

  /**
   * value: "general_decline"
   * @const
   */
  generalDecline: "general_decline",

  /**
   * value: "contact_provider"
   * @const
   */
  contactProvider: "contact_provider",

  /**
   * value: "lack_of_funds"
   * @const
   */
  lackOfFunds: "lack_of_funds"
};
/**
 * @member {module:BillaBear/model/InlineResponse20014.FailureReasonEnum} failureReason
 */
InlineResponse20014.prototype.failureReason = undefined;

