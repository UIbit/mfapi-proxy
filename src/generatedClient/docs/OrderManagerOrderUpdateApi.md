# OrderManagerOrderUpdateApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlOrderUpdatePost**](#baseurlorderupdatepost) | **POST** //{base_url}/order_update | order_update_purchase|

# **baseUrlOrderUpdatePost**
> baseUrlOrderUpdatePost()


### Example

```typescript
import {
    OrderManagerOrderUpdateApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderManagerOrderUpdateApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlOrderUpdatePost(
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

