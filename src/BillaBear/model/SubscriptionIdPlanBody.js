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
 * The SubscriptionIdPlanBody model module.
 * @module BillaBear/model/SubscriptionIdPlanBody
 * @version 1.0.0
 */
export default class SubscriptionIdPlanBody {
  /**
   * Constructs a new <code>SubscriptionIdPlanBody</code>.
   * @alias module:BillaBear/model/SubscriptionIdPlanBody
   * @class
   * @param when {module:BillaBear/model/SubscriptionIdPlanBody.WhenEnum} 
   * @param price {String} The ID for the price to be used
   */
  constructor(when, price) {
    this.when = when;
    this.price = price;
  }

  /**
   * Constructs a <code>SubscriptionIdPlanBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/SubscriptionIdPlanBody} obj Optional instance to populate.
   * @return {module:BillaBear/model/SubscriptionIdPlanBody} The populated <code>SubscriptionIdPlanBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionIdPlanBody();
      if (data.hasOwnProperty('when'))
        obj.when = ApiClient.convertToType(data['when'], 'String');
      if (data.hasOwnProperty('plan'))
        obj.plan = ApiClient.convertToType(data['plan'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>when</code> property.
 * @enum {String}
 * @readonly
 */
SubscriptionIdPlanBody.WhenEnum = {
  /**
   * value: "instantly"
   * @const
   */
  instantly: "instantly",

  /**
   * value: "next-cycle"
   * @const
   */
  nextCycle: "next-cycle"
};
/**
 * @member {module:BillaBear/model/SubscriptionIdPlanBody.WhenEnum} when
 */
SubscriptionIdPlanBody.prototype.when = undefined;

/**
 * The ID for the subscription plan to be used
 * @member {String} plan
 */
SubscriptionIdPlanBody.prototype.plan = undefined;

/**
 * The ID for the price to be used
 * @member {String} price
 */
SubscriptionIdPlanBody.prototype.price = undefined;
