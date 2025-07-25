# NFTCAMSApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlNftBankAccountChangePost**](#baseurlnftbankaccountchangepost) | **POST** //{base_url}/nft_bank_account_change | bank_account_change|
|[**baseUrlNftContactChangePost**](#baseurlnftcontactchangepost) | **POST** //{base_url}/nft_contact_change | contact_change|
|[**baseUrlNftNomineeChangePost**](#baseurlnftnomineechangepost) | **POST** //{base_url}/nft_nominee_change | nomine_change|

# **baseUrlNftBankAccountChangePost**
> baseUrlNftBankAccountChangePost()


### Example

```typescript
import {
    NFTCAMSApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NFTCAMSApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlNftBankAccountChangePost(
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

# **baseUrlNftContactChangePost**
> baseUrlNftContactChangePost()


### Example

```typescript
import {
    NFTCAMSApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NFTCAMSApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlNftContactChangePost(
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

# **baseUrlNftNomineeChangePost**
> baseUrlNftNomineeChangePost()


### Example

```typescript
import {
    NFTCAMSApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NFTCAMSApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlNftNomineeChangePost(
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

