# Class2FAApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlV2Get2faLinkPost**](#baseurlv2get2falinkpost) | **POST** //{base_url}/v2/get_2fa_link | get_2fa_link/verify_order_cancel|

# **baseUrlV2Get2faLinkPost**
> baseUrlV2Get2faLinkPost()


### Example

```typescript
import {
    Class2FAApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new Class2FAApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlV2Get2faLinkPost(
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

