# BillaBear.SubscriptionsApi

All URIs are relative to *https://{customerId}.billabear.cloud/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSeatsSubscriptions**](SubscriptionsApi.md#addSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/add | Add Seats
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /subscription/{subscriptionId}/cancel | Cancel Subscription
[**changeSubscriptionPrice**](SubscriptionsApi.md#changeSubscriptionPrice) | **POST** /subscription/{subscriptionId}/price | Change Price
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /customer/{customerId}/subscription/start | Create Subscription
[**customerChangeSubscriptionPlan**](SubscriptionsApi.md#customerChangeSubscriptionPlan) | **POST** /subscription/{subscriptionId}/plan | Change Subscription Plan
[**extendTrial**](SubscriptionsApi.md#extendTrial) | **POST** /subscription/{subscriptionId}/extend | Extend Trial Subscription
[**getActiveForCustomer**](SubscriptionsApi.md#getActiveForCustomer) | **GET** /customer/{customerId}/subscription/active | List Customer Active Subscriptions
[**getForCustomer**](SubscriptionsApi.md#getForCustomer) | **GET** /customer/{customerId}/subscription | List Customer Subscriptions
[**listSubscriptionPlans**](SubscriptionsApi.md#listSubscriptionPlans) | **GET** /subscription/plans | List Subscription Plans
[**listSubscriptions**](SubscriptionsApi.md#listSubscriptions) | **GET** /subscription | List
[**removeSeatsSubscriptions**](SubscriptionsApi.md#removeSeatsSubscriptions) | **POST** /subscription/{subscriptionId}/seats/remove | Remove Seats
[**showSubscriptionById**](SubscriptionsApi.md#showSubscriptionById) | **GET** /subscription/{subscriptionId} | Detail
[**startTrial**](SubscriptionsApi.md#startTrial) | **POST** /customer/{customerId}/subscription/trial | Start Trial Subscription For Customer

<a name="addSeatsSubscriptions"></a>
# **addSeatsSubscriptions**
> InlineResponse20011 addSeatsSubscriptions(body, subscriptionId)

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

let apiInstance = new BillaBear.SubscriptionsApi();
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelSubscription"></a>
# **cancelSubscription**
> &#x27;String&#x27; cancelSubscription(body, subscriptionId)

Cancel Subscription

Info for a specific subscription

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionIdCancelBody(); // SubscriptionIdCancelBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.cancelSubscription(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SubscriptionIdCancelBody**](SubscriptionIdCancelBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changeSubscriptionPrice"></a>
# **changeSubscriptionPrice**
> InlineResponse20011 changeSubscriptionPrice(body, subscriptionId)

Change Price

Changes the price being used for a price. Useful for changing pricing schedule or just price.

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionIdPriceBody(); // SubscriptionIdPriceBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.changeSubscriptionPrice(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SubscriptionIdPriceBody**](SubscriptionIdPriceBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSubscription"></a>
# **createSubscription**
> Subscription createSubscription(body, customerId)

Create Subscription

Create subscription for a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionStartBody(); // SubscriptionStartBody | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.createSubscription(body, customerId, (error, data, response) => {
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
 **body** | [**SubscriptionStartBody**](SubscriptionStartBody.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerChangeSubscriptionPlan"></a>
# **customerChangeSubscriptionPlan**
> Subscription customerChangeSubscriptionPlan(body, subscriptionId)

Change Subscription Plan

Change the subscription plan for a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionIdPlanBody(); // SubscriptionIdPlanBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.customerChangeSubscriptionPlan(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SubscriptionIdPlanBody**](SubscriptionIdPlanBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="extendTrial"></a>
# **extendTrial**
> Subscription extendTrial(body, subscriptionId)

Extend Trial Subscription

Extend a trial subscription so it&#x27;s converted from a trial to a normal subscription.

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionIdExtendBody(); // SubscriptionIdExtendBody | 
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.extendTrial(body, subscriptionId, (error, data, response) => {
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
 **body** | [**SubscriptionIdExtendBody**](SubscriptionIdExtendBody.md)|  | 
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActiveForCustomer"></a>
# **getActiveForCustomer**
> InlineResponse2006 getActiveForCustomer(customerId)

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

let apiInstance = new BillaBear.SubscriptionsApi();
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getForCustomer"></a>
# **getForCustomer**
> InlineResponse2006 getForCustomer(customerId)

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

let apiInstance = new BillaBear.SubscriptionsApi();
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSubscriptionPlans"></a>
# **listSubscriptionPlans**
> InlineResponse20010 listSubscriptionPlans(opts)

List Subscription Plans

List all subscriptions plans

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example" // String | The key to be used in pagination to say what the last key of the previous page was
};
apiInstance.listSubscriptionPlans(opts, (error, data, response) => {
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

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSubscriptions"></a>
# **listSubscriptions**
> InlineResponse2006 listSubscriptions(opts)

List

List all subscriptions

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let opts = { 
  'limit': 56, // Number | How many items to return at one time (max 100)
  'lastKey': "lastKey_example" // String | The key to be used in pagination to say what the last key of the previous page was
};
apiInstance.listSubscriptions(opts, (error, data, response) => {
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

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeSeatsSubscriptions"></a>
# **removeSeatsSubscriptions**
> InlineResponse20011 removeSeatsSubscriptions(body, subscriptionId)

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

let apiInstance = new BillaBear.SubscriptionsApi();
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showSubscriptionById"></a>
# **showSubscriptionById**
> Subscription showSubscriptionById(subscriptionId)

Detail

Info for a specific subscription

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | The id of the subscription to retrieve

apiInstance.showSubscriptionById(subscriptionId, (error, data, response) => {
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
 **subscriptionId** | **String**| The id of the subscription to retrieve | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="startTrial"></a>
# **startTrial**
> Subscription startTrial(body, customerId)

Start Trial Subscription For Customer

Start subscription for a customer

### Example
```javascript
import {BillaBear} from 'billa_bear';
let defaultClient = BillaBear.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new BillaBear.SubscriptionsApi();
let body = new BillaBear.SubscriptionTrialBody(); // SubscriptionTrialBody | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve

apiInstance.startTrial(body, customerId, (error, data, response) => {
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
 **body** | [**SubscriptionTrialBody**](SubscriptionTrialBody.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

