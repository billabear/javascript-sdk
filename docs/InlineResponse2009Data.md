# BillaBear.InlineResponse2009Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**currency** | **String** | Three-letter ISO currency code. Must be upper-case | [optional] 
**externalReference** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**receipts** | [**[InlineResponse2009Receipts]**](InlineResponse2009Receipts.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `completed` (value: `"completed"`)
* `disputed` (value: `"disputed"`)
* `partiallyRefunded` (value: `"partially_refunded"`)
* `fullyRefunded` (value: `"fully_refunded"`)

