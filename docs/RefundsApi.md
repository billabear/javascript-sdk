# BillaBear.RefundsApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRefundsForCustomer**](RefundsApi.md#getRefundsForCustomer) | **GET** /customer/{customerId}/refund | List Customer Refunds
[**listRefund**](RefundsApi.md#listRefund) | **GET** /refund | List
[**showRefundById**](RefundsApi.md#showRefundById) | **GET** /refund/{refundId} | Detail

<a name="getRefundsForCustomer"></a>
# **getRefundsForCustomer**
> InlineResponse2002 getRefundsForCustomer(customerId, opts)

List Customer Refunds

List Customer Refund

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.RefundsApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example", // String | The key to be used in pagination to say what the last key of the previous page was
  'name': "name_example" // String | The name to search for
};
apiInstance.getRefundsForCustomer(customerId, opts, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRefund"></a>
# **listRefund**
> InlineResponse2002 listRefund(opts)

List

List all refund

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.RefundsApi();
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example", // String | The key to be used in pagination to say what the last key of the previous page was
  'name': "name_example" // String | The name to search for
};
apiInstance.listRefund(opts, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showRefundById"></a>
# **showRefundById**
> Refund showRefundById(refundId)

Detail

Info for a specific Refund

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.RefundsApi();
let refundId = "refundId_example"; // String | The id of the refund

apiInstance.showRefundById(refundId, (error, data, response) => {
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
 **refundId** | **String**| The id of the refund | 

### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

