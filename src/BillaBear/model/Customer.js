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

/**
 * The Customer model module.
 * @module BillaBear/model/Customer
 * @version 1.0.0
 */
export default class Customer {
  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:BillaBear/model/Customer
   * @class
   * @param email {String} 
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:BillaBear/model/Customer} obj Optional instance to populate.
   * @return {module:BillaBear/model/Customer} The populated <code>Customer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Customer();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('tax_number'))
        obj.taxNumber = ApiClient.convertToType(data['tax_number'], 'String');
      if (data.hasOwnProperty('standard_tax_rate'))
        obj.standardTaxRate = ApiClient.convertToType(data['standard_tax_rate'], 'Number');
      if (data.hasOwnProperty('digital_tax_rate'))
        obj.digitalTaxRate = ApiClient.convertToType(data['digital_tax_rate'], 'Number');
      if (data.hasOwnProperty('billing_type'))
        obj.billingType = ApiClient.convertToType(data['billing_type'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
      if (data.hasOwnProperty('external_reference'))
        obj.externalReference = ApiClient.convertToType(data['external_reference'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('brand'))
        obj.brand = ApiClient.convertToType(data['brand'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Customer.prototype.id = undefined;

/**
 * @member {String} email
 */
Customer.prototype.email = undefined;

/**
 * The tax number for the customer <strong>Since 1.1</strong>
 * @member {String} taxNumber
 */
Customer.prototype.taxNumber = undefined;

/**
 * The tax rate for the customer on for standard services a <strong>Since 1.1</strong>
 * @member {Number} standardTaxRate
 */
Customer.prototype.standardTaxRate = undefined;

/**
 * The tax rate for the customer on digital services <strong>Since 1.1</strong>
 * @member {Number} digitalTaxRate
 */
Customer.prototype.digitalTaxRate = undefined;

/**
 * Allowed values for the <code>billingType</code> property.
 * @enum {String}
 * @readonly
 */
Customer.BillingTypeEnum = {
  /**
   * value: "card"
   * @const
   */
  card: "card",

  /**
   * value: "invoice"
   * @const
   */
  invoice: "invoice"
};
/**
 * Choice between card and invoice
 * @member {module:BillaBear/model/Customer.BillingTypeEnum} billingType
 */
Customer.prototype.billingType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Customer.TypeEnum = {
  /**
   * value: "individual"
   * @const
   */
  individual: "individual",

  /**
   * value: "business"
   * @const
   */
  business: "business"
};
/**
 * Choice between 'individual' and 'business'. When not provided 'individual' is used. <strong>Since 1.1</strong>
 * @member {module:BillaBear/model/Customer.TypeEnum} type
 */
Customer.prototype.type = undefined;

/**
 * @member {String} reference
 */
Customer.prototype.reference = undefined;

/**
 * @member {String} externalReference
 */
Customer.prototype.externalReference = undefined;

/**
 * @member {module:BillaBear/model/Address} address
 */
Customer.prototype.address = undefined;

/**
 * Defaults to 'en' if not sent.
 * @member {String} locale
 */
Customer.prototype.locale = undefined;

/**
 * Defaults to 'default' if not sent.
 * @member {String} brand
 */
Customer.prototype.brand = undefined;

