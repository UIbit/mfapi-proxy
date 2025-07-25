# UCCGetUccApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlV2GetUccPost**](#baseurlv2getuccpost) | **POST** //{base_url}/v2/get_ucc | get_ucc|

# **baseUrlV2GetUccPost**
> baseUrlV2GetUccPost()


### Example

```typescript
import {
    UCCGetUccApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UCCGetUccApi(configuration);

let baseUrl: string; // (default to undefined)
let contentType: string; //application/json; charset=utf-8 (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlV2GetUccPost(
    baseUrl,
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **baseUrl** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] | application/json; charset&#x3D;utf-8 | (optional) defaults to undefined|


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

