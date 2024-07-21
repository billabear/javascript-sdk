# BillaBear.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**email** | **String** |  | 
**taxNumber** | **String** | The tax number for the customer &lt;strong&gt;Since 1.1&lt;/strong&gt; | [optional] 
**standardTaxRate** | **Number** | The tax rate for the customer on for standard services a &lt;strong&gt;Since 1.1&lt;/strong&gt; | [optional] 
**digitalTaxRate** | **Number** | The tax rate for the customer on digital services &lt;strong&gt;Since 1.1&lt;/strong&gt; | [optional] 
**billingType** | **String** | Choice between card and invoice | [optional] 
**type** | **String** | Choice between &#x27;individual&#x27; and &#x27;business&#x27;. When not provided &#x27;individual&#x27; is used. &lt;strong&gt;Since 1.1&lt;/strong&gt; | [optional] 
**reference** | **String** |  | [optional] 
**externalReference** | **String** |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**locale** | **String** | Defaults to &#x27;en&#x27; if not sent. | [optional] 
**brand** | **String** | Defaults to &#x27;default&#x27; if not sent. | [optional] 

<a name="BillingTypeEnum"></a>
## Enum: BillingTypeEnum

* `card` (value: `"card"`)
* `invoice` (value: `"invoice"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `individual` (value: `"individual"`)
* `business` (value: `"business"`)

