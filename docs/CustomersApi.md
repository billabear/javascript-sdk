# BillaBear.CustomersApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSeatsSubscriptions**](CustomersApi.md#addSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/add | Add Seats
[**applyVoucherToCustomer**](CustomersApi.md#applyVoucherToCustomer) | **POST** /customer/{customerId}/voucher | Apply voucher
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /customer | Create
[**createCustomerUsageLimit**](CustomersApi.md#createCustomerUsageLimit) | **POST** /customer/{customerId}/uasge-limit | Create Usage Limit
[**customerCustomerIdUasgeLimitLimitIdDelete**](CustomersApi.md#customerCustomerIdUasgeLimitLimitIdDelete) | **DELETE** /customer/{customerId}/uasge-limit/{limitId} | Delete Usage Limit
[**disableCustomer**](CustomersApi.md#disableCustomer) | **POST** /customer/{customerId}/disable | Disable Customer
[**enableCustomer**](CustomersApi.md#enableCustomer) | **POST** /customer/{customerId}/enable | Enable Customer
[**getActiveForCustomer**](CustomersApi.md#getActiveForCustomer) | **GET** /customer/{customerId}/subscription/active | List Customer Active Subscriptions
[**getAllCustomers**](CustomersApi.md#getAllCustomers) | **GET** /customer | List
[**getCustomerById**](CustomersApi.md#getCustomerById) | **GET** /customer/{customerId} | Detail
[**getCustomerCosts**](CustomersApi.md#getCustomerCosts) | **GET** /customer/{customerId}/costs | Usage Cost Estimate
[**getCustomerLimitsById**](CustomersApi.md#getCustomerLimitsById) | **GET** /customer/{customerId}/limits | Fetch Customer Limits
[**getCustomerUsageLimitsById**](CustomersApi.md#getCustomerUsageLimitsById) | **GET** /customer/{customerId}/uasge-limit | Fetch Customer Usage Limits
[**getForCustomer**](CustomersApi.md#getForCustomer) | **GET** /customer/{customerId}/subscription | List Customer Subscriptions
[**getInvoicesForCustomer**](CustomersApi.md#getInvoicesForCustomer) | **GET** /customer/{customerId}/invoices | List Customer Invoices
[**getPaymentsForCustomer**](CustomersApi.md#getPaymentsForCustomer) | **GET** /customer/{customerId}/payment | List Customer Payments
[**getRefundsForCustomer**](CustomersApi.md#getRefundsForCustomer) | **GET** /customer/{customerId}/refund | List Customer Refunds
[**listPaymentDetails**](CustomersApi.md#listPaymentDetails) | **GET** /customer/{customerId}/payment-methods | List Customer&#x27;s Payment Details
[**removeSeatsSubscriptions**](CustomersApi.md#removeSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/remove | Remove Seats
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /customer/{customerId} | Update

<a name="addSeatsSubscriptions"></a>
# **addSeatsSubscriptions**
> InlineResponse20013 addSeatsSubscriptions(body, subscriptionId)

Add Seats

Adds seats to a per seat subscription&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1.4&lt;/strong&gt;

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.SeatsAddBody(); // SeatsAddBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.addSeatsSubscriptions(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SeatsAddBody**](SeatsAddBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="applyVoucherToCustomer"></a>
# **applyVoucherToCustomer**
> applyVoucherToCustomer(body, customerId)

Apply voucher

Apply Voucher to Customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.VoucherCode(); // VoucherCode | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.applyVoucherToCustomer(body, customerId, (error, data, response) => {
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
 **body** | [**VoucherCode**](VoucherCode.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomer"></a>
# **createCustomer**
> Customer createCustomer(body)

Create

Create a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.Customer(); // Customer | 

apiInstance.createCustomer(body, (error, data, response) => {
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
 **body** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomerUsageLimit"></a>
# **createCustomerUsageLimit**
> UsageLimit createCustomerUsageLimit(body, customerId)

Create Usage Limit

Create Usage Limit for the custoemr

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.CustomerIdUasgelimitBody(); // CustomerIdUasgelimitBody | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.createCustomerUsageLimit(body, customerId, (error, data, response) => {
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
 **body** | [**CustomerIdUasgelimitBody**](CustomerIdUasgelimitBody.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**UsageLimit**](UsageLimit.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerCustomerIdUasgeLimitLimitIdDelete"></a>
# **customerCustomerIdUasgeLimitLimitIdDelete**
> customerCustomerIdUasgeLimitLimitIdDelete(customerId, usageLimitId)

Delete Usage Limit

Delete Usage Limit for the custoemr

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve
let usageLimitId = "usageLimitId_example"; // String | The id of the usage limit

apiInstance.customerCustomerIdUasgeLimitLimitIdDelete(customerId, usageLimitId, (error, data, response) => {
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
 **customerId** | **String**| The id of the customer to retrieve | 
 **usageLimitId** | **String**| The id of the usage limit | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="disableCustomer"></a>
# **disableCustomer**
> disableCustomer(customerId)

Disable Customer

Disable customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.disableCustomer(customerId, (error, data, response) => {
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
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enableCustomer"></a>
# **enableCustomer**
> enableCustomer(customerId)

Enable Customer

Enable a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.enableCustomer(customerId, (error, data, response) => {
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
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getActiveForCustomer"></a>
# **getActiveForCustomer**
> InlineResponse2008 getActiveForCustomer(customerId)

List Customer Active Subscriptions

List all Active customer subscriptions

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getActiveForCustomer(customerId, (error, data, response) => {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllCustomers"></a>
# **getAllCustomers**
> InlineResponse200 getAllCustomers(opts)

List

List all customers

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example", // String | The key to be used in pagination to say what the last key of the previous page was
  'email': "email_example", // String | The email to search for
  'country': "country_example", // String | The country code to search for
  'reference': "reference_example", // String | The reference to search for
  'externalReference': "externalReference_example", // String | The external reference to search for
  'companyName': "companyName_example" // String | The company name to search for
};
apiInstance.getAllCustomers(opts, (error, data, response) => {
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
 **email** | **String**| The email to search for | [optional] 
 **country** | **String**| The country code to search for | [optional] 
 **reference** | **String**| The reference to search for | [optional] 
 **externalReference** | **String**| The external reference to search for | [optional] 
 **companyName** | **String**| The company name to search for | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerById"></a>
# **getCustomerById**
> Customer getCustomerById(customerId)

Detail

Info for a specific customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getCustomerById(customerId, (error, data, response) => {
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

[**Customer**](Customer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerCosts"></a>
# **getCustomerCosts**
> InlineResponse2001 getCustomerCosts(customerId)

Usage Cost Estimate

The estimated costs from usage based billing for a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getCustomerCosts(customerId, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerLimitsById"></a>
# **getCustomerLimitsById**
> InlineResponse2002 getCustomerLimitsById(customerId)

Fetch Customer Limits

Limits for a specific customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getCustomerLimitsById(customerId, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCustomerUsageLimitsById"></a>
# **getCustomerUsageLimitsById**
> InlineResponse2005 getCustomerUsageLimitsById(customerId)

Fetch Customer Usage Limits

Usage Limits for a specific customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getCustomerUsageLimitsById(customerId, (error, data, response) => {
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

<a name="getForCustomer"></a>
# **getForCustomer**
> InlineResponse2008 getForCustomer(customerId)

List Customer Subscriptions

List all customer subscriptions&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1&lt;/strong&gt;

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.getForCustomer(customerId, (error, data, response) => {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

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

let apiInstance = new BillaBear.CustomersApi();
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

let apiInstance = new BillaBear.CustomersApi();
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

<a name="getRefundsForCustomer"></a>
# **getRefundsForCustomer**
> InlineResponse2003 getRefundsForCustomer(customerId, opts)

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

let apiInstance = new BillaBear.CustomersApi();
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPaymentDetails"></a>
# **listPaymentDetails**
> InlineResponse2007 listPaymentDetails(customerId)

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

let apiInstance = new BillaBear.CustomersApi();
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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeSeatsSubscriptions"></a>
# **removeSeatsSubscriptions**
> InlineResponse20013 removeSeatsSubscriptions(body, subscriptionId)

Remove Seats

Remove seats to a per seat subscription&lt;br&gt;&lt;br&gt;&lt;strong&gt;Since 1.1.4&lt;/strong&gt;

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.SeatsRemoveBody(); // SeatsRemoveBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.removeSeatsSubscriptions(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SeatsRemoveBody**](SeatsRemoveBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> Customer updateCustomer(body, customerId)

Update

Update a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.CustomersApi();
let body = new BillaBear.Customer(); // Customer | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.updateCustomer(body, customerId, (error, data, response) => {
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
 **body** | [**Customer**](Customer.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**Customer**](Customer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

