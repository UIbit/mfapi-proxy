# UCC2faResendLinkApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrl2faResendLinkPost**](#baseurl2faresendlinkpost) | **POST** //{base_url}/2fa_resend_link | 2fa_resend_link|

# **baseUrl2faResendLinkPost**
> baseUrl2faResendLinkPost()


### Example

```typescript
import {
    UCC2faResendLinkApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UCC2faResendLinkApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrl2faResendLinkPost(
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

