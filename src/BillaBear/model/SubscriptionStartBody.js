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
import Bool from './Bool';

/**
 * The SubscriptionStartBody model module.
 * @module BillaBear/model/SubscriptionStartBody
 * @version 1.0.0
 */
export default class SubscriptionStartBody {
  /**
   * Constructs a new <code>SubscriptionStartBody</code>.
   * @alias module:BillaBear/model/SubscriptionStartBody
   * @class
   * @param subscriptionPlan {String} The ID for the subscription plan to be used (Can also be the code name)
   */
  constructor(subscriptionPlan) {
    this.subscriptionPlan = subscriptionPlan;
  }

  /**
   * Constructs a <code>SubscriptionStartBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/SubscriptionStartBody} obj Optional instance to populate.
   * @return {module:BillaBear/model/SubscriptionStartBody} The populated <code>SubscriptionStartBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscriptionStartBody();
      if (data.hasOwnProperty('subscription_plan'))
        obj.subscriptionPlan = ApiClient.convertToType(data['subscription_plan'], 'String');
      if (data.hasOwnProperty('payment_details'))
        obj.paymentDetails = ApiClient.convertToType(data['payment_details'], 'String');
      if (data.hasOwnProperty('card_token'))
        obj.cardToken = ApiClient.convertToType(data['card_token'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'String');
      if (data.hasOwnProperty('schedule'))
        obj.schedule = ApiClient.convertToType(data['schedule'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('seat_numbrers'))
        obj.seatNumbrers = ApiClient.convertToType(data['seat_numbrers'], 'Number');
      if (data.hasOwnProperty('deny_trial'))
        obj.denyTrial = ApiClient.convertToType(data['deny_trial'], Bool);
    }
    return obj;
  }
}

/**
 * The ID for the subscription plan to be used (Can also be the code name)
 * @member {String} subscriptionPlan
 */
SubscriptionStartBody.prototype.subscriptionPlan = undefined;

/**
 * The Id for the customer's payment details to be used
 * @member {String} paymentDetails
 */
SubscriptionStartBody.prototype.paymentDetails = undefined;

/**
 * A stripe card token that's been created using Stripe's js sdk. It'll create the payment details for the customer.
 * @member {String} cardToken
 */
SubscriptionStartBody.prototype.cardToken = undefined;

/**
 * The ID for the price to be used
 * @member {String} price
 */
SubscriptionStartBody.prototype.price = undefined;

/**
 * Allowed values for the <code>schedule</code> property.
 * @enum {String}
 * @readonly
 */
SubscriptionStartBody.ScheduleEnum = {
  /**
   * value: "week"
   * @const
   */
  week: "week",

  /**
   * value: "month"
   * @const
   */
  month: "month",

  /**
   * value: "year"
   * @const
   */
  year: "year",

  /**
   * value: "one-off"
   * @const
   */
  oneOff: "one-off"
};
/**
 * The schedule of the plan that is to be started. Only used if price isn't given. Requires currency as well.
 * @member {module:BillaBear/model/SubscriptionStartBody.ScheduleEnum} schedule
 */
SubscriptionStartBody.prototype.schedule = undefined;

/**
 * The currency of the plan that is to be started. Only used if price isn't given. Requires schedule as well.
 * @member {String} currency
 */
SubscriptionStartBody.prototype.currency = undefined;

/**
 * @member {Number} seatNumbrers
 */
SubscriptionStartBody.prototype.seatNumbrers = undefined;

/**
 * @member {module:BillaBear/model/Bool} denyTrial
 */
SubscriptionStartBody.prototype.denyTrial = undefined;
