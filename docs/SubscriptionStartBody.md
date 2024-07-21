# BillaBear.SubscriptionStartBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptionPlan** | **String** | The ID for the subscription plan to be used (Can also be the code name) | 
**paymentDetails** | **String** | The Id for the customer&#x27;s payment details to be used | [optional] 
**cardToken** | **String** | A stripe card token that&#x27;s been created using Stripe&#x27;s js sdk. It&#x27;ll create the payment details for the customer. | [optional] 
**price** | **String** | The ID for the price to be used | [optional] 
**schedule** | **String** | The schedule of the plan that is to be started. Only used if price isn&#x27;t given. Requires currency as well. | [optional] 
**currency** | **String** | The currency of the plan that is to be started. Only used if price isn&#x27;t given. Requires schedule as well. | [optional] 
**seatNumbrers** | **Number** |  | [optional] 
**denyTrial** | [**Bool**](Bool.md) |  | [optional] 

<a name="ScheduleEnum"></a>
## Enum: ScheduleEnum

* `week` (value: `"week"`)
* `month` (value: `"month"`)
* `year` (value: `"year"`)
* `oneOff` (value: `"one-off"`)

