# SystematicOrdersEngineSxpRegisterCsvApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseurlSxpRegisterPost**](#baseurlsxpregisterpost) | **POST** //{baseurl}/sxp_register | 4. swp_register|

# **baseurlSxpRegisterPost**
> baseurlSxpRegisterPost()


### Example

```typescript
import {
    SystematicOrdersEngineSxpRegisterCsvApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineSxpRegisterCsvApi(configuration);

let baseurl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseurlSxpRegisterPost(
    baseurl,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **baseurl** | [**string**] |  | defaults to undefined|


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

