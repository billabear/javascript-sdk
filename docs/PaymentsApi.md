# BillaBear.PaymentsApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargeInvoice**](PaymentsApi.md#chargeInvoice) | **POST** /invoice/{invoiceId}/charge | Charge Invoice
[**downloadInvoice**](PaymentsApi.md#downloadInvoice) | **GET** /invoice/{invoiceId}/download | Download Invoice
[**downloadReceipt**](PaymentsApi.md#downloadReceipt) | **GET** /receipt/{receiptId}/download | Download Receipt
[**getInvoicesForCustomer**](PaymentsApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices
[**getPaymentsForCustomer**](PaymentsApi.md#getPaymentsForCustomer) | **GET** /customer/{customerId}/payment | List Customer Payments
[**listPayment**](PaymentsApi.md#listPayment) | **GET** /payment | List
[**refundPayment**](PaymentsApi.md#refundPayment) | **POST** /payment/{paymentId}/refund | Refund Payment

<a name="chargeInvoice"></a>
# **chargeInvoice**
> InlineResponse20014 chargeInvoice(invoiceId)

Charge Invoice

Attempts to charge a card that is on file for the invoice amount

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let invoiceId = "invoiceId_example"; // String | The id of the invoice

apiInstance.chargeInvoice(invoiceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The id of the invoice | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="downloadInvoice"></a>
# **downloadInvoice**
> &#x27;Blob&#x27; downloadInvoice(invoiceId)

Download Invoice

Returns the pdf blob for the invoice

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let invoiceId = "invoiceId_example"; // String | The id of the invoice

apiInstance.downloadInvoice(invoiceId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The id of the invoice | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

<a name="downloadReceipt"></a>
# **downloadReceipt**
> &#x27;Blob&#x27; downloadReceipt(receipt)

Download Receipt

Returns the pdf blob for the Receipt

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let receipt = "receipt_example"; // String | The id of the receipt

apiInstance.downloadReceipt(receipt, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receipt** | **String**| The id of the receipt | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

<a name="getInvoicesForCustomer"></a>
# **getInvoicesForCustomer**
> InlineResponse2006 getInvoicesForCustomer(customerId)

List Customer Invoices

List Customer Invoices

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getInvoicesForCustomer(customerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPaymentsForCustomer"></a>
# **getPaymentsForCustomer**
> InlineResponse2004 getPaymentsForCustomer(customerId, opts)

List Customer Payments

List Customer Payment

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example", // String | The key to be used in pagination to say what the last key of the previous page was
  'name': "name_example" // String | The name to search for
};
apiInstance.getPaymentsForCustomer(customerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve | 
 **limit** | **Number**| How many items to return at one time (max 100) | [optional] 
 **lastKey** | **String**| The key to be used in pagination to say what the last key of the previous page was | [optional] 
 **name** | **String**| The name to search for | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPayment"></a>
# **listPayment**
> InlineResponse2009 listPayment(opts)

List

List all payment

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example", // String | The key to be used in pagination to say what the last key of the previous page was
  'name': "name_example" // String | The name to search for
};
apiInstance.listPayment(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 100) | [optional] 
 **lastKey** | **String**| The key to be used in pagination to say what the last key of the previous page was | [optional] 
 **name** | **String**| The name to search for | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refundPayment"></a>
# **refundPayment**
> refundPayment(body, paymentId)

Refund Payment

Issue a refund for payment

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentsApi();
let body = new BillaBear.IssueRefundPayment(); // IssueRefundPayment | 
let paymentId = "paymentId_example"; // String | The id of the payment

apiInstance.refundPayment(body, paymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IssueRefundPayment**](IssueRefundPayment.md)|  | 
 **paymentId** | **String**| The id of the payment | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

