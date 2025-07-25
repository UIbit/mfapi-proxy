# PaymentGatewayApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlGetExchpgServicePost**](#baseurlgetexchpgservicepost) | **POST** //{base_url}/get_exchpg_service | get_exchpg_service|
|[**baseUrlSendPaymentInfoPost**](#baseurlsendpaymentinfopost) | **POST** //{base_url}/send_payment_info | send_payment_info|

# **baseUrlGetExchpgServicePost**
> baseUrlGetExchpgServicePost()


### Example

```typescript
import {
    PaymentGatewayApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentGatewayApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlGetExchpgServicePost(
    baseUrl,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **baseUrl** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **baseUrlSendPaymentInfoPost**
> baseUrlSendPaymentInfoPost()


### Example

```typescript
import {
    PaymentGatewayApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentGatewayApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSendPaymentInfoPost(
    baseUrl,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **baseUrl** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

