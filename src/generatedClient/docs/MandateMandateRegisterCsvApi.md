# MandateMandateRegisterCsvApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseurlMandateRegisterPost**](#baseurlmandateregisterpost) | **POST** //{baseurl}/mandate_register | mandate_register_csv|

# **baseurlMandateRegisterPost**
> baseurlMandateRegisterPost()


### Example

```typescript
import {
    MandateMandateRegisterCsvApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MandateMandateRegisterCsvApi(configuration);

let baseurl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseurlMandateRegisterPost(
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

