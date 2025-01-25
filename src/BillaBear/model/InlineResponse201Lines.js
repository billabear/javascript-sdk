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
import Price from './Price';
import SubscriptionPlan from './SubscriptionPlan';

/**
 * The InlineResponse201Lines model module.
 * @module BillaBear/model/InlineResponse201Lines
 * @version 1.0.0
 */
export default class InlineResponse201Lines {
  /**
   * Constructs a new <code>InlineResponse201Lines</code>.
   * @alias module:BillaBear/model/InlineResponse201Lines
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse201Lines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse201Lines} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse201Lines} The populated <code>InlineResponse201Lines</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse201Lines();
      if (data.hasOwnProperty('subscription_plan'))
        obj.subscriptionPlan = SubscriptionPlan.constructFromObject(data['subscription_plan']);
      if (data.hasOwnProperty('price'))
        obj.price = Price.constructFromObject(data['price']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('seat_number'))
        obj.seatNumber = ApiClient.convertToType(data['seat_number'], 'Number');
      if (data.hasOwnProperty('sub_total'))
        obj.subTotal = ApiClient.convertToType(data['sub_total'], 'Number');
      if (data.hasOwnProperty('tax_total'))
        obj.taxTotal = ApiClient.convertToType(data['tax_total'], 'Number');
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:BillaBear/model/SubscriptionPlan} subscriptionPlan
 */
InlineResponse201Lines.prototype.subscriptionPlan = undefined;

/**
 * @member {module:BillaBear/model/Price} price
 */
InlineResponse201Lines.prototype.price = undefined;

/**
 * @member {String} description
 */
InlineResponse201Lines.prototype.description = undefined;

/**
 * @member {String} currency
 */
InlineResponse201Lines.prototype.currency = undefined;

/**
 * @member {Number} seatNumber
 */
InlineResponse201Lines.prototype.seatNumber = undefined;

/**
 * @member {Number} subTotal
 */
InlineResponse201Lines.prototype.subTotal = undefined;

/**
 * @member {Number} taxTotal
 */
InlineResponse201Lines.prototype.taxTotal = undefined;

/**
 * @member {Number} taxRate
 */
InlineResponse201Lines.prototype.taxRate = undefined;

