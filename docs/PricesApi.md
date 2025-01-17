# BillaBear.PricesApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrice**](PricesApi.md#createPrice) | **POST** /product/{productId}/price | Create
[**listPrice**](PricesApi.md#listPrice) | **GET** /product/{productId}/price | List

<a name="createPrice"></a>
# **createPrice**
> createPrice(body, productId)

Create

Create a price

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PricesApi();
let body = new BillaBear.Price(); // Price | 
let productId = "productId_example"; // String | The id of the product to retrieve

apiInstance.createPrice(body, productId, (error, data, response) => {
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
 **body** | [**Price**](Price.md)|  | 
 **productId** | **String**| The id of the product to retrieve | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPrice"></a>
# **listPrice**
> InlineResponse20011 listPrice(productId, opts)

List

List all prices

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.PricesApi();
let productId = "productId_example"; // String | The id of the product to retrieve
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example" // String | The key to be used in pagination to say what the last key of the previous page was
};
apiInstance.listPrice(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to retrieve | 
 **limit** | **Number**| How many items to return at one time (max 100) | [optional] 
 **lastKey** | **String**| The key to be used in pagination to say what the last key of the previous page was | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

