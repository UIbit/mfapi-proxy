## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Routes](#api-routes)
- [Testing](#testing)
- [Extending the Project](#extending-the-project)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Overview

This project acts as a middleware proxy to aggregate and manage API calls originally tested in Postman. The typed API client (`MfapiClient`) encapsulates the HTTP requests to external APIs, while Express routes expose these calls internally. Jest with Supertest is configured for automated testing, including axios mocking for stable test runs.

---

## Features

- Typed API client encapsulating external API calls
- Express routes forwarding requests to the API client
- Environment-variable based configuration (`.env`)
- Jest test suite with axios mocking for reliable tests
- Easy to extend with new API endpoints
- Developer-friendly TypeScript setup with strong typings

---

## Project Structure

/src
/routes # Optional if routes are separated here
MfapiClient.ts # Typed API client class for external calls
types/
apiPayloads.ts # TypeScript interfaces for API request payloads
app.ts # Express application and route definitions
server.ts # Server entry point, loads env and starts the app

/tests # Jest tests (supertest + mocking axios)
jest.config.js # Jest config for TypeScript
package.json # Node project metadata and scripts
tsconfig.json # TypeScript compiler options
.env # Environment variables (not committed)

text

---

## Setup & Installation

1. Clone the repository:

git clone https://github.com/yourusername/mfapi-proxy.git
cd mfapi-proxy

text

2. Install dependencies:

npm install

text

3. Create a `.env` file at project root (see below for variables).

---

## Environment Variables

Create a `.env` file with the following required variables:

POSTMAN_API_BASE_URL=https://staging-apis.mfapis.in/api
API_AUTH_TOKEN=your_actual_api_auth_token_here
PORT=3000

text

- Replace `API_AUTH_TOKEN` with your token or a dummy value for testing.
- `POSTMAN_API_BASE_URL` should match your API provider's base URL.
- `PORT` is the port your Express server listens on.

---

## Running the Server

Start the development server with hot reload:

npm run dev

text

Or compile and run using:

npx tsc
node dist/server.js

text

The server will run at `http://localhost:<PORT>` (default 3000).

---

## API Routes

This server proxies external Postman APIs. Common routes include:

| Route                   | HTTP Method | Description                      |
|-------------------------|-------------|--------------------------------|
| `/onboarding/create`    | POST        | Creates a new investor          |
| `/transaction/order`    | POST        | Places a transaction order      |
| `/v2/add_ucc`           | POST        | Adds a UCC entry                |
| *(more routes can be added as needed)* | | |

Use these endpoints to send requests with the appropriate payload structure defined by the API docs.

---

## Testing

Run Jest tests with:

npm test

text

- Tests cover Express endpoints and use `supertest`.
- Axios is mocked to isolate tests from real external API calls.
- Test files are located in the `/tests` directory.

---

## Extending the Project

- Add new API endpoints by:
  - Defining request payload interfaces in `/src/types/apiPayloads.ts`
  - Adding new methods in `MfapiClient.ts` with proper typings
  - Exposing new Express routes in `app.ts`
  - Writing new Jest tests under `/tests`

- Enhance error handling, add logging, or middleware for auth as needed.

---

## Troubleshooting

- **Cannot find module 'dotenv'**: Run `npm install dotenv`
- **Port already in use**: Change the port in `.env` or free up the occupied port.
- **API auth failures**: Check your `API_AUTH_TOKEN` validity and API URL.
- **Tests failing due to network issues**: Ensure axios is mocked or API is reachable.

---

## License

[MIT License](LICENSE)

---

*For questions or contributions, please open an issue or pull request on GitHub.*
