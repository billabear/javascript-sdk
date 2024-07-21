# BillaBear.SubscriptionIdCancelBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**when** | **String** |  | [default to &#x27;end-of-run&#x27;]
**refundType** | **String** |  | [default to &#x27;none&#x27;]
**_date** | **Date** |  | [optional] 
**comment** | **String** |  | [optional] 

<a name="WhenEnum"></a>
## Enum: WhenEnum

* `endOfRun` (value: `"end-of-run"`)
* `instantly` (value: `"instantly"`)
* `specificDate` (value: `"specific-date"`)


<a name="RefundTypeEnum"></a>
## Enum: RefundTypeEnum

* `none` (value: `"none"`)
* `full` (value: `"full"`)
* `prorate` (value: `"prorate"`)

