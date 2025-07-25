# SystematicOrdersEngineApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**baseUrlSxpCancelPost**](#baseurlsxpcancelpost) | **POST** //{base_url}/sxp_cancel | sxp_cancel|
|[**baseUrlSxpGetHistoryPost**](#baseurlsxpgethistorypost) | **POST** //{base_url}/sxp_get_history | sxp_get_history|
|[**baseUrlSxpGetPost**](#baseurlsxpgetpost) | **POST** //{base_url}/sxp_get | sxp_get|
|[**baseUrlSxpListPost**](#baseurlsxplistpost) | **POST** //{base_url}/sxp_list | sxp_list|
|[**baseUrlSxpResumePost**](#baseurlsxpresumepost) | **POST** //{base_url}/sxp_resume | sxp_resume|
|[**baseUrlSxpSetPausePost**](#baseurlsxpsetpausepost) | **POST** //{base_url}/sxp_set_pause | sxp_set_pause|
|[**baseUrlSxpTopupPost**](#baseurlsxptopuppost) | **POST** //{base_url}/sxp_topup | sxp_topup|

# **baseUrlSxpCancelPost**
> baseUrlSxpCancelPost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpCancelPost(
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

# **baseUrlSxpGetHistoryPost**
> baseUrlSxpGetHistoryPost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpGetHistoryPost(
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

# **baseUrlSxpGetPost**
> baseUrlSxpGetPost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpGetPost(
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

# **baseUrlSxpListPost**
> baseUrlSxpListPost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpListPost(
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

# **baseUrlSxpResumePost**
> baseUrlSxpResumePost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpResumePost(
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

# **baseUrlSxpSetPausePost**
> baseUrlSxpSetPausePost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpSetPausePost(
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

# **baseUrlSxpTopupPost**
> baseUrlSxpTopupPost()


### Example

```typescript
import {
    SystematicOrdersEngineApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystematicOrdersEngineApi(configuration);

let baseUrl: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.baseUrlSxpTopupPost(
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

