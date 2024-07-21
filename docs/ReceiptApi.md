# BillaBear.ReceiptApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadReceipt**](ReceiptApi.md#downloadReceipt) | **GET** /receipt/{receiptId}/download | Download Receipt

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

let apiInstance = new BillaBear.ReceiptApi();
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

