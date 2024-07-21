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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/BillaBear/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/BillaBear/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BillaBear);
  }
}(this, function(expect, BillaBear) {
  'use strict';

  var instance;

  describe('BillaBear', function() {
    describe('Invoice', function() {
      beforeEach(function() {
        instance = new BillaBear.Invoice();
      });

      it('should create an instance of Invoice', function() {
        // TODO: update the code to test Invoice
        expect(instance).to.be.a(BillaBear.Invoice);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property taxTotal (base name: "tax_total")', function() {
        // TODO: update the code to test the property taxTotal
        expect(instance).to.have.property('taxTotal');
        // expect(instance.taxTotal).to.be(expectedValueLiteral);
      });

      it('should have the property subTotal (base name: "sub_total")', function() {
        // TODO: update the code to test the property subTotal
        expect(instance).to.have.property('subTotal');
        // expect(instance.subTotal).to.be(expectedValueLiteral);
      });

      it('should have the property amountDue (base name: "amount_due")', function() {
        // TODO: update the code to test the property amountDue
        expect(instance).to.have.property('amountDue');
        // expect(instance.amountDue).to.be(expectedValueLiteral);
      });

      it('should have the property paid (base name: "paid")', function() {
        // TODO: update the code to test the property paid
        expect(instance).to.have.property('paid');
        // expect(instance.paid).to.be(expectedValueLiteral);
      });

      it('should have the property payLink (base name: "pay_link")', function() {
        // TODO: update the code to test the property payLink
        expect(instance).to.have.property('payLink');
        // expect(instance.payLink).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property paidAt (base name: "paid_at")', function() {
        // TODO: update the code to test the property paidAt
        expect(instance).to.have.property('paidAt');
        // expect(instance.paidAt).to.be(expectedValueLiteral);
      });

      it('should have the property dueDate (base name: "due_date")', function() {
        // TODO: update the code to test the property dueDate
        expect(instance).to.have.property('dueDate');
        // expect(instance.dueDate).to.be(expectedValueLiteral);
      });

      it('should have the property billerAddress (base name: "biller_address")', function() {
        // TODO: update the code to test the property billerAddress
        expect(instance).to.have.property('billerAddress');
        // expect(instance.billerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property payeeaddress (base name: "payeeaddress")', function() {
        // TODO: update the code to test the property payeeaddress
        expect(instance).to.have.property('payeeaddress');
        // expect(instance.payeeaddress).to.be(expectedValueLiteral);
      });

      it('should have the property lines (base name: "lines")', function() {
        // TODO: update the code to test the property lines
        expect(instance).to.have.property('lines');
        // expect(instance.lines).to.be(expectedValueLiteral);
      });

    });
  });

}));
