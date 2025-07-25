# AccesTokenApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlLoginPost**](#baseurlloginpost) | **POST** //{base_url}/login | Member Login|

# **baseUrlLoginPost**
> baseUrlLoginPost()


### Example

```typescript
import {
    AccesTokenApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccesTokenApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlLoginPost(
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

