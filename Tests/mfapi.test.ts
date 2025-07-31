
const mockMfaClient = {
  login: jest.fn(),
  get2FALink: jest.fn(),
  linkMandate: jest.fn(),
  listMandates: jest.fn(),
  createNewOrder: jest.fn(),
  listOrders: jest.fn(),
  getPaymentDetail: jest.fn(),
  sendPaymentInfo: jest.fn(),
  registerSXP: jest.fn(),
  listSXP: jest.fn(),
  addUCC: jest.fn(),
  listUCC: jest.fn(),
  getMasterSchemeList: jest.fn(),
  getNAVMasterList: jest.fn(),
  changeNFTBankAccount: jest.fn(),
  getUserDetails: jest.fn()
};

jest.mock('../src/index', () => ({ mfaClient: mockMfaClient }));

import request from 'supertest';
import app from '../src/app';

describe('MFAPI Proxy Server Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Authentication APIs', () => {
    test('POST /login - should login successfully', async () => {
      const mockResponse = {
        success: true,
        token: 'mock-jwt-token',
        userId: '12345',
        message: 'Login successful'
      };

      mockMfaClient.login.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.login).toHaveBeenCalledWith({
        username: 'test@example.com',
        password: 'password123'
      });
    });

    test('POST /v2/get2faLink - should get 2FA link', async () => {
      const mockResponse = {
        success: true,
        link: 'https://2fa.example.com/verify/abc123',
        message: '2FA link sent successfully'
      };

      mockMfaClient.get2FALink.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/v2/get2faLink')
        .send({
          userId: '12345',
          email: 'test@example.com'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.get2FALink).toHaveBeenCalledWith({
        userId: '12345',
        email: 'test@example.com'
      });
    });
  });

  describe('Mandate APIs', () => {
    test('POST /mandate/link - should link mandate', async () => {
      const mockResponse = {
        success: true,
        mandateId: 'MANDATE001',
        message: 'Mandate linked successfully'
      };

      mockMfaClient.linkMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/link')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001',
          bankAccount: '1234567890'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.linkMandate).toHaveBeenCalledWith({
        userId: '12345',
        mandateId: 'MANDATE001',
        bankAccount: '1234567890'
      });
    });

    test('POST /mandate/list - should list mandates', async () => {
      const mockResponse = {
        success: true,
        mandates: [
          { id: 'MANDATE001', status: 'ACTIVE', bankAccount: '1234567890' },
          { id: 'MANDATE002', status: 'PENDING', bankAccount: '0987654321' }
        ],
        total: 2
      };

      mockMfaClient.listMandates.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/list')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.listMandates).toHaveBeenCalledWith({
        userId: '12345'
      });
    });
  });

  describe('Order APIs', () => {
    test('POST /order/new - should create new order', async () => {
      const mockResponse = {
        success: true,
        orderId: 'ORDER001',
        status: 'PENDING',
        amount: 10000,
        message: 'Order created successfully'
      };

      mockMfaClient.createNewOrder.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/new')
        .send({
          userId: '12345',
          schemeCode: 'SCHEME001',
          amount: 10000,
          orderType: 'PURCHASE'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.createNewOrder).toHaveBeenCalledWith({
        userId: '12345',
        schemeCode: 'SCHEME001',
        amount: 10000,
        orderType: 'PURCHASE'
      });
    });

    test('POST /order/list - should list orders', async () => {
      const mockResponse = {
        success: true,
        orders: [
          { id: 'ORDER001', status: 'COMPLETED', amount: 10000 },
          { id: 'ORDER002', status: 'PENDING', amount: 5000 }
        ],
        total: 2
      };

      mockMfaClient.listOrders.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/list')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.listOrders).toHaveBeenCalledWith({
        userId: '12345'
      });
    });
  });

  describe('Payment APIs', () => {
    test('POST /payment/getPaymentDetail - should get payment details', async () => {
      const mockResponse = {
        success: true,
        paymentDetails: {
          orderId: 'ORDER001',
          amount: 10000,
          status: 'PAID',
          transactionId: 'TXN123',
          paymentMethod: 'UPI'
        }
      };

      mockMfaClient.getPaymentDetail.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/payment/getPaymentDetail')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getPaymentDetail).toHaveBeenCalledWith({
        orderId: 'ORDER001'
      });
    });

    test('POST /payment/sendPaymentInfo - should send payment info', async () => {
      const mockResponse = {
        success: true,
        transactionId: 'TXN123',
        status: 'SUCCESS',
        message: 'Payment processed successfully'
      };

      mockMfaClient.sendPaymentInfo.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/payment/sendPaymentInfo')
        .send({
          orderId: 'ORDER001',
          paymentMethod: 'UPI',
          transactionId: 'TXN123'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.sendPaymentInfo).toHaveBeenCalledWith({
        orderId: 'ORDER001',
        paymentMethod: 'UPI',
        transactionId: 'TXN123'
      });
    });
  });

  describe('SXP APIs', () => {
    test('POST /sxp/register - should register SXP', async () => {
      const mockResponse = {
        success: true,
        sxpId: 'SXP001',
        status: 'ACTIVE',
        message: 'SXP registered successfully'
      };

      mockMfaClient.registerSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/register')
        .send({
          userId: '12345',
          schemeCode: 'SCHEME001',
          amount: 5000,
          frequency: 'MONTHLY'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.registerSXP).toHaveBeenCalledWith({
        userId: '12345',
        schemeCode: 'SCHEME001',
        amount: 5000,
        frequency: 'MONTHLY'
      });
    });

    test('POST /sxp/list - should list SXP', async () => {
      const mockResponse = {
        success: true,
        sxpList: [
          { id: 'SXP001', status: 'ACTIVE', amount: 5000, frequency: 'MONTHLY' },
          { id: 'SXP002', status: 'PAUSED', amount: 3000, frequency: 'WEEKLY' }
        ],
        total: 2
      };

      mockMfaClient.listSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/list')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.listSXP).toHaveBeenCalledWith({
        userId: '12345'
      });
    });
  });

  describe('UCC APIs', () => {
    test('POST /ucc/v2/addUcc - should add UCC', async () => {
      const mockResponse = {
        success: true,
        uccId: 'UCC001',
        status: 'ACTIVE',
        message: 'UCC added successfully'
      };

      mockMfaClient.addUCC.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/v2/addUcc')
        .send({
          userId: '12345',
          uccCode: 'UCC001',
          holdingNature: 'JOINT'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.addUCC).toHaveBeenCalledWith({
        userId: '12345',
        uccCode: 'UCC001',
        holdingNature: 'JOINT'
      });
    });

    test('POST /ucc/v2/listUcc - should list UCC', async () => {
      const mockResponse = {
        success: true,
        uccList: [
          { id: 'UCC001', status: 'ACTIVE', holdingNature: 'JOINT' },
          { id: 'UCC002', status: 'INACTIVE', holdingNature: 'SINGLE' }
        ],
        total: 2
      };

      mockMfaClient.listUCC.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/v2/listUcc')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.listUCC).toHaveBeenCalledWith({
        userId: '12345'
      });
    });
  });

  describe('Master Data APIs', () => {
    test('POST /masterSchemeList - should get master scheme list', async () => {
      const mockResponse = {
        success: true,
        schemes: [
          { code: 'SCHEME001', name: 'Equity Fund', category: 'EQUITY' },
          { code: 'SCHEME002', name: 'Debt Fund', category: 'DEBT' }
        ],
        total: 2
      };

      mockMfaClient.getMasterSchemeList.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/masterSchemeList')
        .send({
          category: 'EQUITY'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getMasterSchemeList).toHaveBeenCalledWith({
        category: 'EQUITY'
      });
    });

    test('POST /nav/masterList - should get NAV master list', async () => {
      const mockResponse = {
        success: true,
        navData: [
          { schemeCode: 'SCHEME001', nav: 15.50, date: '2024-01-15' },
          { schemeCode: 'SCHEME002', nav: 12.75, date: '2024-01-15' }
        ],
        total: 2
      };

      mockMfaClient.getNAVMasterList.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/nav/masterList')
        .send({
          date: '2024-01-15'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getNAVMasterList).toHaveBeenCalledWith({
        date: '2024-01-15'
      });
    });
  });

  describe('NFT CAMS APIs', () => {
    test('POST /nft/bankAccountChange - should change bank account', async () => {
      const mockResponse = {
        success: true,
        message: 'Bank account changed successfully',
        newBankAccount: '1234567890'
      };

      mockMfaClient.changeNFTBankAccount.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/nft/bankAccountChange')
        .send({
          userId: '12345',
          newBankAccount: '1234567890',
          bankName: 'HDFC Bank'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.changeNFTBankAccount).toHaveBeenCalledWith({
        userId: '12345',
        newBankAccount: '1234567890',
        bankName: 'HDFC Bank'
      });
    });
  });

  describe('Error Handling', () => {
    test('should handle API errors properly', async () => {
      const mockError = {
        response: {
          status: 400,
          data: { error: 'Invalid credentials' }
        }
      };

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({
          username: '',
          password: ''
        })
        .expect(400);

      expect(response.body).toEqual({ error: 'Invalid credentials' });
    });

    test('should handle network errors properly', async () => {
      const mockError = new Error('Network timeout');

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(500);

      expect(response.body).toEqual({ error: 'Network timeout' });
    });
  });

  describe('Health Check', () => {
    test('GET / - should return health check', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.text).toBe('MFAPI Proxy Server is running!');
    });

    test('GET /api-docs - should return API documentation', async () => {
      const response = await request(app)
        .get('/api-docs')
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('endpoints');
      expect(response.body.endpoints).toHaveProperty('POST /login');
      expect(response.body.endpoints).toHaveProperty('POST /order/new');
    });
  });
});
