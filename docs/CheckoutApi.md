# BillaBear.CheckoutApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCheckout**](CheckoutApi.md#createCheckout) | **POST** /checkout | Create Checkout

<a name="createCheckout"></a>
# **createCheckout**
> InlineResponse201 createCheckout(body)

Create Checkout

Create checkout&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 2024.01&lt;/strong&gt;

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CheckoutApi();
let body = new BillaBear.CheckoutBody(); // CheckoutBody | 

apiInstance.createCheckout(body, (error, data, response) => {
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
 **body** | [**CheckoutBody**](CheckoutBody.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

