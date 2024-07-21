# BillaBear.InvoicesApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargeInvoice**](InvoicesApi.md#chargeInvoice) | **POST** /invoice/{invoiceId}/charge | Charge Invoice
[**downloadInvoice**](InvoicesApi.md#downloadInvoice) | **GET** /invoice/{invoiceId}/download | Download Invoice
[**getInvoicesForCustomer**](InvoicesApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices

<a name="chargeInvoice"></a>
# **chargeInvoice**
> InlineResponse20012 chargeInvoice(invoiceId)

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

let apiInstance = new BillaBear.InvoicesApi();
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

[**InlineResponse20012**](InlineResponse20012.md)

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

let apiInstance = new BillaBear.InvoicesApi();
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

<a name="getInvoicesForCustomer"></a>
# **getInvoicesForCustomer**
> InlineResponse2004 getInvoicesForCustomer(customerId)

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

let apiInstance = new BillaBear.InvoicesApi();
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

