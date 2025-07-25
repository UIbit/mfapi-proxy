# UCCUpdateUccUPDATEHOLDINGNATUREApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlV2AddUccPost**](#baseurlv2adduccpost) | **POST** //{base_url}/v2/add_ucc | add_ucc() INDIVIDUAL JO|

# **baseUrlV2AddUccPost**
> object baseUrlV2AddUccPost()


### Example

```typescript
import {
    UCCUpdateUccUPDATEHOLDINGNATUREApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UCCUpdateUccUPDATEHOLDINGNATUREApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlV2AddUccPost(
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

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Access-Control-Allow-Headers -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Origin -  <br>  * Content-Type -  <br>  * Date -  <br>  * Content-Length -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

