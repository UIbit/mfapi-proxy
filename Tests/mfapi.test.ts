// tests/mfapi.test.ts

// Mock axios before importing your app or client modules
jest.mock('axios', () => {
  const mAxiosInstance = {
    post: jest.fn(() => Promise.resolve({ data: { status: 'mocked', value: 123 } })),
    get: jest.fn(() => Promise.resolve({ data: { status: 'mocked-get', value: 456 } })),
    // add other methods if you use them (put, delete, etc.)
  };
  
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});

import request from 'supertest';
import app from '../src/app';

describe('MFAPI Proxy Endpoints - Mocked Axios', () => {
  test('POST /onboarding/create should return mocked response', async () => {
    const payload = {
      data: {
        member_code: { member_id: "M123456" },
        investor: {
          client_code: "34099321001",
          investor_name: "John Doe",
          pan: "ABCDE1234F"
        }
      }
    };

    const response = await request(app)
      .post('/onboarding/create')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(200);

    // Since axios is mocked, expect mocked data
    expect(response.body).toEqual({ status: 'mocked', value: 123 });
  });

  test('POST /transaction/order should return mocked response', async () => {
    const payload = {
      data: {
        member_code: { member_id: "M123456" },
        order_transaction_type: "Purchase",
        folio_number: "FA12345"
      }
    };

    const response = await request(app)
      .post('/transaction/order')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toEqual({ status: 'mocked', value: 123 });
  });

  // Add more route tests as needed
});
