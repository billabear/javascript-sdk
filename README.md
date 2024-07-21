<p align="center">
  <img width="450px" src="https://ha-static-data.s3.eu-central-1.amazonaws.com/github-readme-logo.png">
</p>

<p align="center">
  <h1 style="text-align: center">BillaBear Javascript SDK</h1>
</p>

## Installation & Usage

```shell
npm install billabear --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BillaBear = require('billa_bear');
var defaultClient = BillaBear.ApiClient.instance;
defaultClient.basePath = 'YOUR API URL'

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-Key'] = "Token"

var api = new BillaBear.CheckoutApi()
var body = new BillaBear.CheckoutBody(); // {CheckoutBody} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createCheckout(body, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BillaBear.CheckoutApi* | [**createCheckout**](docs/CheckoutApi.md#createCheckout) | **POST** /checkout | Create Checkout
*BillaBear.CustomersApi* | [**addSeatsSubscriptions**](docs/CustomersApi.md#addSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/add | Add Seats
*BillaBear.CustomersApi* | [**applyVoucherToCustomer**](docs/CustomersApi.md#applyVoucherToCustomer) | **POST** /customer/{customerId}/voucher | Apply voucher
*BillaBear.CustomersApi* | [**createCustomer**](docs/CustomersApi.md#createCustomer) | **POST** /customer | Create
*BillaBear.CustomersApi* | [**disableCustomer**](docs/CustomersApi.md#disableCustomer) | **POST** /customer/{customerId}/disable | Disable Customer
*BillaBear.CustomersApi* | [**enableCustomer**](docs/CustomersApi.md#enableCustomer) | **POST** /customer/{customerId}/enable | Enable Customer
*BillaBear.CustomersApi* | [**getActiveForCustomer**](docs/CustomersApi.md#getActiveForCustomer) | **GET** /customer/{customerId}/subscription/active | List Customer Active Subscriptions
*BillaBear.CustomersApi* | [**getAllCustomers**](docs/CustomersApi.md#getAllCustomers) | **GET** /customer | List
*BillaBear.CustomersApi* | [**getCustomerById**](docs/CustomersApi.md#getCustomerById) | **GET** /customer/{customerId} | Detail
*BillaBear.CustomersApi* | [**getCustomerLimitsById**](docs/CustomersApi.md#getCustomerLimitsById) | **GET** /customer/{customerId}/limits | Fetch Customer Limits
*BillaBear.CustomersApi* | [**getForCustomer**](docs/CustomersApi.md#getForCustomer) | **GET** /customer/{customerId}/subscription | List Customer Subscriptions
*BillaBear.CustomersApi* | [**getInvoicesForCustomer**](docs/CustomersApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices
*BillaBear.CustomersApi* | [**getPaymentsForCustomer**](docs/CustomersApi.md#getPaymentsForCustomer) | **GET** /customer/{customerId}/payment | List Customer Payments
*BillaBear.CustomersApi* | [**getRefundsForCustomer**](docs/CustomersApi.md#getRefundsForCustomer) | **GET** /customer/{customerId}/refund | List Customer Refunds
*BillaBear.CustomersApi* | [**listPaymentDetails**](docs/CustomersApi.md#listPaymentDetails) | **GET** /customer/{customerId}/payment-methods | List Customer&#x27;s Payment Details
*BillaBear.CustomersApi* | [**removeSeatsSubscriptions**](docs/CustomersApi.md#removeSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/remove | Remove Seats
*BillaBear.CustomersApi* | [**updateCustomer**](docs/CustomersApi.md#updateCustomer) | **PUT** /customer/{customerId} | Update
*BillaBear.InvoicesApi* | [**chargeInvoice**](docs/InvoicesApi.md#chargeInvoice) | **POST** /invoice/{invoiceId}/charge | Charge Invoice
*BillaBear.InvoicesApi* | [**downloadInvoice**](docs/InvoicesApi.md#downloadInvoice) | **GET** /invoice/{invoiceId}/download | Download Invoice
*BillaBear.InvoicesApi* | [**getInvoicesForCustomer**](docs/InvoicesApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices
*BillaBear.PaymentDetailsApi* | [**completeFrontendPaymentDetails**](docs/PaymentDetailsApi.md#completeFrontendPaymentDetails) | **POST** /customer/{customerId}/payment-methods/frontend-payment-token | Complete Frontend Detail Collection
*BillaBear.PaymentDetailsApi* | [**deletePaymentDetails**](docs/PaymentDetailsApi.md#deletePaymentDetails) | **DELETE** /payment-methods/{paymentDetailsId} | Delete
*BillaBear.PaymentDetailsApi* | [**deletePaymentDetailsCustomer**](docs/PaymentDetailsApi.md#deletePaymentDetailsCustomer) | **DELETE** /customer/{customerId}/payment-methods/{paymentDetailsId} | Delete With Customer
*BillaBear.PaymentDetailsApi* | [**getPaymentDetails**](docs/PaymentDetailsApi.md#getPaymentDetails) | **GET** /payment-methods/{paymentDetailsId} | Fetch
*BillaBear.PaymentDetailsApi* | [**listPaymentDetails**](docs/PaymentDetailsApi.md#listPaymentDetails) | **GET** /customer/{customerId}/payment-methods | List Customer&#x27;s Payment Details
*BillaBear.PaymentDetailsApi* | [**makeDefaultPaymentDetails**](docs/PaymentDetailsApi.md#makeDefaultPaymentDetails) | **POST** /payment-methods/{paymentDetailsId}/default | Make Default
*BillaBear.PaymentDetailsApi* | [**makeDefaultPaymentDetailsCustomer**](docs/PaymentDetailsApi.md#makeDefaultPaymentDetailsCustomer) | **POST** /customer/{customerId}/payment-methods/{paymentDetailsId}/default | Make Default With Customer
*BillaBear.PaymentDetailsApi* | [**startFrontendPaymentDetails**](docs/PaymentDetailsApi.md#startFrontendPaymentDetails) | **GET** /customer/{customerId}/payment-methods/frontend-payment-token | Start Frontend Detail Collection
*BillaBear.PaymentsApi* | [**chargeInvoice**](docs/PaymentsApi.md#chargeInvoice) | **POST** /invoice/{invoiceId}/charge | Charge Invoice
*BillaBear.PaymentsApi* | [**downloadInvoice**](docs/PaymentsApi.md#downloadInvoice) | **GET** /invoice/{invoiceId}/download | Download Invoice
*BillaBear.PaymentsApi* | [**downloadReceipt**](docs/PaymentsApi.md#downloadReceipt) | **GET** /receipt/{receiptId}/download | Download Receipt
*BillaBear.PaymentsApi* | [**getInvoicesForCustomer**](docs/PaymentsApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices
*BillaBear.PaymentsApi* | [**getPaymentsForCustomer**](docs/PaymentsApi.md#getPaymentsForCustomer) | **GET** /customer/{customerId}/payment | List Customer Payments
*BillaBear.PaymentsApi* | [**listPayment**](docs/PaymentsApi.md#listPayment) | **GET** /payment | List
*BillaBear.PaymentsApi* | [**refundPayment**](docs/PaymentsApi.md#refundPayment) | **POST** /payment/{paymentId}/refund | Refund Payment
*BillaBear.PricesApi* | [**createPrice**](docs/PricesApi.md#createPrice) | **POST** /product/{productId}/price | Create
*BillaBear.PricesApi* | [**listPrice**](docs/PricesApi.md#listPrice) | **GET** /product/{productId}/price | List
*BillaBear.ProductsApi* | [**createProduct**](docs/ProductsApi.md#createProduct) | **POST** /product | Create
*BillaBear.ProductsApi* | [**listProduct**](docs/ProductsApi.md#listProduct) | **GET** /product | List
*BillaBear.ProductsApi* | [**showProductById**](docs/ProductsApi.md#showProductById) | **GET** /product/{productId} | Detail
*BillaBear.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PUT** /product/{productId} | Update
*BillaBear.ReceiptApi* | [**downloadReceipt**](docs/ReceiptApi.md#downloadReceipt) | **GET** /receipt/{receiptId}/download | Download Receipt
*BillaBear.RefundsApi* | [**getRefundsForCustomer**](docs/RefundsApi.md#getRefundsForCustomer) | **GET** /customer/{customerId}/refund | List Customer Refunds
*BillaBear.RefundsApi* | [**listRefund**](docs/RefundsApi.md#listRefund) | **GET** /refund | List
*BillaBear.RefundsApi* | [**showRefundById**](docs/RefundsApi.md#showRefundById) | **GET** /refund/{refundId} | Detail
*BillaBear.SubscriptionsApi* | [**addSeatsSubscriptions**](docs/SubscriptionsApi.md#addSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/add | Add Seats
*BillaBear.SubscriptionsApi* | [**cancelSubscription**](docs/SubscriptionsApi.md#cancelSubscription) | **POST** /subscription/{subscriptionId}/cancel | Cancel Subscription
*BillaBear.SubscriptionsApi* | [**changeSubscriptionPrice**](docs/SubscriptionsApi.md#changeSubscriptionPrice) | **POST** /subscription/{subscriptionId}/price | Change Price
*BillaBear.SubscriptionsApi* | [**createSubscription**](docs/SubscriptionsApi.md#createSubscription) | **POST** /customer/{customerId}/subscription/start | Create Subscription
*BillaBear.SubscriptionsApi* | [**customerChangeSubscriptionPlan**](docs/SubscriptionsApi.md#customerChangeSubscriptionPlan) | **POST** /subscription/{subscriptionId}/plan | Change Subscription Plan
*BillaBear.SubscriptionsApi* | [**extendTrial**](docs/SubscriptionsApi.md#extendTrial) | **POST** /subscription/{subscriptionId}/extend | Extend Trial Subscription
*BillaBear.SubscriptionsApi* | [**getActiveForCustomer**](docs/SubscriptionsApi.md#getActiveForCustomer) | **GET** /customer/{customerId}/subscription/active | List Customer Active Subscriptions
*BillaBear.SubscriptionsApi* | [**getForCustomer**](docs/SubscriptionsApi.md#getForCustomer) | **GET** /customer/{customerId}/subscription | List Customer Subscriptions
*BillaBear.SubscriptionsApi* | [**listSubscriptionPlans**](docs/SubscriptionsApi.md#listSubscriptionPlans) | **GET** /subscription/plans | List Subscription Plans
*BillaBear.SubscriptionsApi* | [**listSubscriptions**](docs/SubscriptionsApi.md#listSubscriptions) | **GET** /subscription | List
*BillaBear.SubscriptionsApi* | [**removeSeatsSubscriptions**](docs/SubscriptionsApi.md#removeSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/remove | Remove Seats
*BillaBear.SubscriptionsApi* | [**showSubscriptionById**](docs/SubscriptionsApi.md#showSubscriptionById) | **GET** /subscription/{subscriptionId} | Detail
*BillaBear.SubscriptionsApi* | [**startTrial**](docs/SubscriptionsApi.md#startTrial) | **POST** /customer/{customerId}/subscription/trial | Start Trial Subscription For Customer

## Documentation for Models

 - [BillaBear.Address](docs/Address.md)
 - [BillaBear.BillingAdmin](docs/BillingAdmin.md)
 - [BillaBear.CheckoutBody](docs/CheckoutBody.md)
 - [BillaBear.CheckoutItems](docs/CheckoutItems.md)
 - [BillaBear.CheckoutSubscriptions](docs/CheckoutSubscriptions.md)
 - [BillaBear.Customer](docs/Customer.md)
 - [BillaBear.Error](docs/Error.md)
 - [BillaBear.Feature](docs/Feature.md)
 - [BillaBear.FrontendToken](docs/FrontendToken.md)
 - [BillaBear.InlineResponse200](docs/InlineResponse200.md)
 - [BillaBear.InlineResponse2001](docs/InlineResponse2001.md)
 - [BillaBear.InlineResponse20010](docs/InlineResponse20010.md)
 - [BillaBear.InlineResponse20011](docs/InlineResponse20011.md)
 - [BillaBear.InlineResponse20012](docs/InlineResponse20012.md)
 - [BillaBear.InlineResponse2002](docs/InlineResponse2002.md)
 - [BillaBear.InlineResponse2003](docs/InlineResponse2003.md)
 - [BillaBear.InlineResponse2004](docs/InlineResponse2004.md)
 - [BillaBear.InlineResponse2005](docs/InlineResponse2005.md)
 - [BillaBear.InlineResponse2006](docs/InlineResponse2006.md)
 - [BillaBear.InlineResponse2007](docs/InlineResponse2007.md)
 - [BillaBear.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [BillaBear.InlineResponse2007Receipts](docs/InlineResponse2007Receipts.md)
 - [BillaBear.InlineResponse2008](docs/InlineResponse2008.md)
 - [BillaBear.InlineResponse2009](docs/InlineResponse2009.md)
 - [BillaBear.InlineResponse201](docs/InlineResponse201.md)
 - [BillaBear.InlineResponse201Lines](docs/InlineResponse201Lines.md)
 - [BillaBear.InlineResponse400](docs/InlineResponse400.md)
 - [BillaBear.Invoice](docs/Invoice.md)
 - [BillaBear.InvoiceLines](docs/InvoiceLines.md)
 - [BillaBear.IssueRefundPayment](docs/IssueRefundPayment.md)
 - [BillaBear.Limit](docs/Limit.md)
 - [BillaBear.PaymentDetails](docs/PaymentDetails.md)
 - [BillaBear.Price](docs/Price.md)
 - [BillaBear.Product](docs/Product.md)
 - [BillaBear.ProductTaxType](docs/ProductTaxType.md)
 - [BillaBear.Refund](docs/Refund.md)
 - [BillaBear.SeatsAddBody](docs/SeatsAddBody.md)
 - [BillaBear.SeatsRemoveBody](docs/SeatsRemoveBody.md)
 - [BillaBear.Subscription](docs/Subscription.md)
 - [BillaBear.SubscriptionIdCancelBody](docs/SubscriptionIdCancelBody.md)
 - [BillaBear.SubscriptionIdExtendBody](docs/SubscriptionIdExtendBody.md)
 - [BillaBear.SubscriptionIdPlanBody](docs/SubscriptionIdPlanBody.md)
 - [BillaBear.SubscriptionIdPriceBody](docs/SubscriptionIdPriceBody.md)
 - [BillaBear.SubscriptionPlan](docs/SubscriptionPlan.md)
 - [BillaBear.SubscriptionStartBody](docs/SubscriptionStartBody.md)
 - [BillaBear.SubscriptionTrialBody](docs/SubscriptionTrialBody.md)
 - [BillaBear.VoucherCode](docs/VoucherCode.md)

## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

