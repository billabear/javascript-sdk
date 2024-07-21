# BillaBear.PaymentDetailsApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeFrontendPaymentDetails**](PaymentDetailsApi.md#completeFrontendPaymentDetails) | **POST** /customer/{customerId}/payment-methods/frontend-payment-token | Complete Frontend Detail Collection
[**deletePaymentDetails**](PaymentDetailsApi.md#deletePaymentDetails) | **DELETE** /payment-methods/{paymentDetailsId} | Delete
[**deletePaymentDetailsCustomer**](PaymentDetailsApi.md#deletePaymentDetailsCustomer) | **DELETE** /customer/{customerId}/payment-methods/{paymentDetailsId} | Delete With Customer
[**getPaymentDetails**](PaymentDetailsApi.md#getPaymentDetails) | **GET** /payment-methods/{paymentDetailsId} | Fetch
[**listPaymentDetails**](PaymentDetailsApi.md#listPaymentDetails) | **GET** /customer/{customerId}/payment-methods | List Customer&#x27;s Payment Details
[**makeDefaultPaymentDetails**](PaymentDetailsApi.md#makeDefaultPaymentDetails) | **POST** /payment-methods/{paymentDetailsId}/default | Make Default
[**makeDefaultPaymentDetailsCustomer**](PaymentDetailsApi.md#makeDefaultPaymentDetailsCustomer) | **POST** /customer/{customerId}/payment-methods/{paymentDetailsId}/default | Make Default With Customer
[**startFrontendPaymentDetails**](PaymentDetailsApi.md#startFrontendPaymentDetails) | **GET** /customer/{customerId}/payment-methods/frontend-payment-token | Start Frontend Detail Collection

<a name="completeFrontendPaymentDetails"></a>
# **completeFrontendPaymentDetails**
> PaymentDetails completeFrontendPaymentDetails(body, customerId)

Complete Frontend Detail Collection

Complete frontend payment details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let body = new BillaBear.FrontendToken(); // FrontendToken | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.completeFrontendPaymentDetails(body, customerId, (error, data, response) => {
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
 **body** | [**FrontendToken**](FrontendToken.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**PaymentDetails**](PaymentDetails.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePaymentDetails"></a>
# **deletePaymentDetails**
> &#x27;String&#x27; deletePaymentDetails(paymentDetailsId)

Delete

Delete Payment Details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let paymentDetailsId = "paymentDetailsId_example"; // String | The id of the payment details

apiInstance.deletePaymentDetails(paymentDetailsId, (error, data, response) => {
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
 **paymentDetailsId** | **String**| The id of the payment details | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePaymentDetailsCustomer"></a>
# **deletePaymentDetailsCustomer**
> &#x27;String&#x27; deletePaymentDetailsCustomer(customerId, paymentDetailsId)

Delete With Customer

Delete Payment Details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let paymentDetailsId = "paymentDetailsId_example"; // String | The id of the payment details

apiInstance.deletePaymentDetailsCustomer(customerId, paymentDetailsId, (error, data, response) => {
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
 **paymentDetailsId** | **String**| The id of the payment details | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPaymentDetails"></a>
# **getPaymentDetails**
> PaymentDetails getPaymentDetails(paymentDetailsId)

Fetch

Fetch the payment cards

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let paymentDetailsId = "paymentDetailsId_example"; // String | The id of the payment details

apiInstance.getPaymentDetails(paymentDetailsId, (error, data, response) => {
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
 **paymentDetailsId** | **String**| The id of the payment details | 

### Return type

[**PaymentDetails**](PaymentDetails.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPaymentDetails"></a>
# **listPaymentDetails**
> InlineResponse2005 listPaymentDetails(customerId)

List Customer&#x27;s Payment Details

List all customers &lt;br&gt;&lt;br&gt;Added in version 1.1

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.listPaymentDetails(customerId, (error, data, response) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="makeDefaultPaymentDetails"></a>
# **makeDefaultPaymentDetails**
> &#x27;String&#x27; makeDefaultPaymentDetails(customerId, paymentDetailsId)

Make Default

Delete Payment Details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let paymentDetailsId = "paymentDetailsId_example"; // String | The id of the payment details

apiInstance.makeDefaultPaymentDetails(customerId, paymentDetailsId, (error, data, response) => {
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
 **paymentDetailsId** | **String**| The id of the payment details | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="makeDefaultPaymentDetailsCustomer"></a>
# **makeDefaultPaymentDetailsCustomer**
> &#x27;String&#x27; makeDefaultPaymentDetailsCustomer(customerId, paymentDetailsId)

Make Default With Customer

Delete Payment Details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let paymentDetailsId = "paymentDetailsId_example"; // String | The id of the payment details

apiInstance.makeDefaultPaymentDetailsCustomer(customerId, paymentDetailsId, (error, data, response) => {
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
 **paymentDetailsId** | **String**| The id of the payment details | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="startFrontendPaymentDetails"></a>
# **startFrontendPaymentDetails**
> FrontendToken startFrontendPaymentDetails(customerId)

Start Frontend Detail Collection

Start frontend payment details

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PaymentDetailsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.startFrontendPaymentDetails(customerId, (error, data, response) => {
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

[**FrontendToken**](FrontendToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

