# NestJS Migration - MFAPI Proxy

This project has been successfully migrated from Express.js to NestJS framework. All endpoints have been preserved and are now organized into NestJS controllers and services.

## Project Structure

```
src/
├── main.ts                 # NestJS application entry point
├── app.module.ts           # Main application module
├── controllers/            # All API controllers
│   ├── auth.controller.ts      # Authentication endpoints (/login, /v2/get2faLink)
│   ├── mandate.controller.ts   # Mandate management endpoints
│   ├── master-data.controller.ts # Master data endpoints
│   ├── order.controller.ts     # Order management endpoints
│   ├── payment.controller.ts   # Payment processing endpoints
│   ├── sxp.controller.ts       # SXP (Systematic Investment Plan) endpoints
│   └── ucc.controller.ts       # UCC (Unique Client Code) endpoints
├── services/
│   └── mfa.service.ts         # MFA client service (wraps the original mfaClient)
├── index.ts               # Original MFA client (unchanged)
└── app.ts                 # Original Express app (kept for reference)
```

## Available Endpoints

### Authentication
- `POST /login` - User login
- `POST /v2/get2faLink` - Get 2FA link

### Mandate Management
- `POST /mandate/link` - Link mandate
- `POST /mandate/cancel` - Cancel mandate
- `POST /mandate/delink` - Delink mandate
- `POST /mandate/get` - Get mandate details
- `POST /mandate/list` - List mandates
- `POST /mandate/update` - Update mandate
- `POST /mandate/register` - Register new mandate
- `POST /mandate/register/csv` - Register mandate via CSV

### Master Data
- `POST /master/scheme/list` - Get master scheme list
- `POST /master/nav/list` - Get NAV master list

### Order Management
- `POST /order/cancel` - Cancel order
- `POST /order/get` - Get order details
- `POST /order/list` - List orders
- `POST /order/create` - Create new order
- `POST /order/update` - Update order

### Payment Processing
- `POST /payment/detail` - Get payment details
- `POST /payment/list` - List payment details
- `POST /payment/exchange/pg` - Get exchange PG service
- `POST /payment/info` - Send payment info
- `POST /payment/aggregator` - Process payment aggregator
- `POST /payment/bsepg/request` - Request BSE PG payment
- `POST /payment/bsepg/info` - Send BSE PG payment info

### SXP (Systematic Investment Plan)
- `POST /sxp/cancel` - Cancel SXP
- `POST /sxp/history` - Get SXP history
- `POST /sxp/get` - Get SXP details
- `POST /sxp/list` - List SXP
- `POST /sxp/resume` - Resume SXP
- `POST /sxp/pause` - Pause SXP
- `POST /sxp/topup` - Topup SXP
- `POST /sxp/register` - Register SXP
- `POST /sxp/register/csv` - Register SXP via CSV

### UCC (Unique Client Code)
- `POST /ucc/resend2fa` - Resend UCC 2FA link
- `POST /ucc/csv` - Process UCC CSV 
- `POST /ucc/update` - Update UCC
- `POST /ucc/get` - Get UCC details
- `POST /ucc/list` - List UCC
- `POST /ucc/add` - Add UCC

## Running the Application

### Development Mode
```bash
npm run dev
# or
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

## Testing

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:cov
```

## Test Coverage

The project includes comprehensive tests for the `/login` endpoint in `src/controllers/auth.controller.spec.ts`. The test suite covers:

- ✅ Successful login with valid credentials
- ✅ Validation errors for missing required fields
- ✅ Validation errors for invalid field values
- ✅ Service error handling
- ✅ Generic error handling
- ✅ 2FA link generation tests

## Key Changes Made

1. **Architecture Migration**: Converted from Express.js to NestJS framework
2. **Modular Structure**: Organized endpoints into logical controllers
3. **Dependency Injection**: Implemented NestJS service pattern
4. **Error Handling**: Enhanced error handling with NestJS HttpException
5. **Validation**: Preserved all original validation logic
6. **Testing**: Added comprehensive Jest tests for authentication endpoints

## Environment Variables

The application uses the same environment variables as before. Make sure your `.env` file is properly configured.

## API Compatibility

All endpoints maintain the same request/response format as the original Express application. No changes are required on the client side.

## Migration Benefits

- **Better Architecture**: NestJS provides better structure and organization
- **Enhanced Testing**: Built-in testing utilities and better test isolation
- **Type Safety**: Improved TypeScript integration
- **Scalability**: Better support for large applications
- **Documentation**: Built-in Swagger support (can be added later)
- **Validation**: Built-in validation pipes (can be enhanced later)

## Next Steps

1. Add more comprehensive tests for other endpoints
2. Implement DTOs for better type safety
3. Add validation pipes for automatic request validation
4. Add Swagger documentation
5. Implement authentication guards
6. Add rate limiting and other security features 