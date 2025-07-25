import request from 'supertest';
import app from '../src/app';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('API tests with mocked axios', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test('POST /onboarding/create returns success', async () => {
    mock.onPost(/\/onboarding\/create/).reply(200, { status: 'success', investorId: '12345' });

    const payload = {
      member_code: { member_id: "M123456" },
      investor: { client_code: "34099321001", investor_name: "John Doe" }
    };

    const res = await request(app)
      .post('/onboarding/create')
      .send(payload);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'success', investorId: '12345' });
  });

  // Add similar tests for other routes...
});
