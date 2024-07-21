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
import Address from './Address';
import Customer from './Customer';
import InvoiceLines from './InvoiceLines';

/**
 * The Invoice model module.
 * @module BillaBear/model/Invoice
 * @version 1.0.0
 */
export default class Invoice {
  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:BillaBear/model/Invoice
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/Invoice} obj Optional instance to populate.
   * @return {module:BillaBear/model/Invoice} The populated <code>Invoice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Invoice();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('customer'))
        obj.customer = Customer.constructFromObject(data['customer']);
      if (data.hasOwnProperty('tax_total'))
        obj.taxTotal = ApiClient.convertToType(data['tax_total'], 'Number');
      if (data.hasOwnProperty('sub_total'))
        obj.subTotal = ApiClient.convertToType(data['sub_total'], 'Number');
      if (data.hasOwnProperty('amount_due'))
        obj.amountDue = ApiClient.convertToType(data['amount_due'], 'Number');
      if (data.hasOwnProperty('paid'))
        obj.paid = ApiClient.convertToType(data['paid'], 'Boolean');
      if (data.hasOwnProperty('pay_link'))
        obj.payLink = ApiClient.convertToType(data['pay_link'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'String');
      if (data.hasOwnProperty('paid_at'))
        obj.paidAt = ApiClient.convertToType(data['paid_at'], 'String');
      if (data.hasOwnProperty('due_date'))
        obj.dueDate = ApiClient.convertToType(data['due_date'], 'String');
      if (data.hasOwnProperty('biller_address'))
        obj.billerAddress = Address.constructFromObject(data['biller_address']);
      if (data.hasOwnProperty('payeeaddress'))
        obj.payeeaddress = Address.constructFromObject(data['payeeaddress']);
      if (data.hasOwnProperty('lines'))
        obj.lines = ApiClient.convertToType(data['lines'], [InvoiceLines]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Invoice.prototype.id = undefined;

/**
 * @member {String} _number
 */
Invoice.prototype._number = undefined;

/**
 * @member {String} currency
 */
Invoice.prototype.currency = undefined;

/**
 * @member {module:BillaBear/model/Customer} customer
 */
Invoice.prototype.customer = undefined;

/**
 * @member {Number} taxTotal
 */
Invoice.prototype.taxTotal = undefined;

/**
 * @member {Number} subTotal
 */
Invoice.prototype.subTotal = undefined;

/**
 * @member {Number} amountDue
 */
Invoice.prototype.amountDue = undefined;

/**
 * @member {Boolean} paid
 */
Invoice.prototype.paid = undefined;

/**
 * @member {String} payLink
 */
Invoice.prototype.payLink = undefined;

/**
 * @member {String} createdAt
 */
Invoice.prototype.createdAt = undefined;

/**
 * @member {String} paidAt
 */
Invoice.prototype.paidAt = undefined;

/**
 * @member {String} dueDate
 */
Invoice.prototype.dueDate = undefined;

/**
 * @member {module:BillaBear/model/Address} billerAddress
 */
Invoice.prototype.billerAddress = undefined;

/**
 * @member {module:BillaBear/model/Address} payeeaddress
 */
Invoice.prototype.payeeaddress = undefined;

/**
 * @member {Array.<module:BillaBear/model/InvoiceLines>} lines
 */
Invoice.prototype.lines = undefined;
