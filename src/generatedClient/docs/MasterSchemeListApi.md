# MasterSchemeListApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlMasterSchemeListPost**](#baseurlmasterschemelistpost) | **POST** //{base_url}/master_scheme_list | master_scheme_list|

# **baseUrlMasterSchemeListPost**
> baseUrlMasterSchemeListPost()


### Example

```typescript
import {
    MasterSchemeListApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MasterSchemeListApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlMasterSchemeListPost(
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

