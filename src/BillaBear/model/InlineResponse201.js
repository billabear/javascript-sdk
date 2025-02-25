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
import BillingAdmin from './BillingAdmin';
import Customer from './Customer';
import InlineResponse201Lines from './InlineResponse201Lines';
import Uuid from './Uuid';

/**
 * The InlineResponse201 model module.
 * @module BillaBear/model/InlineResponse201
 * @version 1.0.0
 */
export default class InlineResponse201 {
  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:BillaBear/model/InlineResponse201
   * @class
   * @param id {module:BillaBear/model/Uuid} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/InlineResponse201} obj Optional instance to populate.
   * @return {module:BillaBear/model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse201();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], Uuid);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('customer'))
        obj.customer = Customer.constructFromObject(data['customer']);
      if (data.hasOwnProperty('billing_admin'))
        obj.billingAdmin = BillingAdmin.constructFromObject(data['billing_admin']);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('sub_total'))
        obj.subTotal = ApiClient.convertToType(data['sub_total'], 'Number');
      if (data.hasOwnProperty('tax_total'))
        obj.taxTotal = ApiClient.convertToType(data['tax_total'], 'Number');
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [InlineResponse201Lines]);
    }
    return obj;
  }
}

/**
 * @member {module:BillaBear/model/Uuid} id
 */
InlineResponse201.prototype.id = undefined;

/**
 * @member {String} name
 */
InlineResponse201.prototype.name = undefined;

/**
 * @member {String} currency
 */
InlineResponse201.prototype.currency = undefined;

/**
 * @member {module:BillaBear/model/Customer} customer
 */
InlineResponse201.prototype.customer = undefined;

/**
 * @member {module:BillaBear/model/BillingAdmin} billingAdmin
 */
InlineResponse201.prototype.billingAdmin = undefined;

/**
 * @member {Number} total
 */
InlineResponse201.prototype.total = undefined;

/**
 * @member {Number} subTotal
 */
InlineResponse201.prototype.subTotal = undefined;

/**
 * @member {Number} taxTotal
 */
InlineResponse201.prototype.taxTotal = undefined;

/**
 * @member {Array.<module:BillaBear/model/InlineResponse201Lines>} lines
 */
InlineResponse201.prototype.lines = undefined;

