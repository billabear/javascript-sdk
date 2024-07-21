# BillaBear.Refund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** | Three-letter ISO currency code. Must be upper-case | [optional] 
**externalReference** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**payment** | [**Paths1paymentgetresponses200contentapplication1jsonschemapropertiesdataitems**](Paths1paymentgetresponses200contentapplication1jsonschemapropertiesdataitems.md) |  | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**billingAdmin** | [**BillingAdmin**](BillingAdmin.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `started` (value: `"started"`)
* `rejected` (value: `"rejected"`)
* `authorised` (value: `"authorised"`)
* `issued` (value: `"issued"`)

