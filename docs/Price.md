# BillaBear.Price

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | 
**currency** | **String** | Three-letter ISO currency code. Must be upper-case | 
**externalReference** | **String** |  | [optional] 
**recurring** | **Boolean** |  | 
**schedule** | **String** | Required if recurring is true | [optional] 
**includingTax** | **Boolean** | If the price is including tax. If false tax will be added on top of the price. | [optional] 
**_public** | **Boolean** |  | [optional] 

<a name="ScheduleEnum"></a>
## Enum: ScheduleEnum

* `week` (value: `"week"`)
* `month` (value: `"month"`)
* `year` (value: `"year"`)
* `oneOff` (value: `"one-off"`)

