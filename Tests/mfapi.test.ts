
const mockMfaClient = {
  // Authentication APIs
  login: jest.fn(),
  get2FALink: jest.fn(),
  
  // Mandate APIs
  linkMandate: jest.fn(),
  cancelMandate: jest.fn(),
  delinkMandate: jest.fn(),
  getMandate: jest.fn(),
  listMandates: jest.fn(),
  updateMandate: jest.fn(),
  registerMandate: jest.fn(),
  registerMandateCSV: jest.fn(),
  
  // Master Data APIs
  getMasterSchemeList: jest.fn(),
  getNAVMasterList: jest.fn(),
  
  // NFT CAMS APIs
  changeNFTBankAccount: jest.fn(),
  changeNFTContact: jest.fn(),
  changeNFTNominee: jest.fn(),
  
  // Order Manager APIs
  getPaymentDetail: jest.fn(),
  listPaymentDetails: jest.fn(),
  cancelOrder: jest.fn(),
  getOrder: jest.fn(),
  listOrders: jest.fn(),
  createNewOrder: jest.fn(),
  updateOrder: jest.fn(),
  
  // Payment Gateway APIs
  getExchangePGService: jest.fn(),
  sendPaymentInfo: jest.fn(),
  processPaymentAggregator: jest.fn(),
  requestSinglePaymentBSEPG: jest.fn(),
  sendPaymentInfoBSEPG: jest.fn(),
  
  // Payment Manager APIs
  getMISDetail: jest.fn(),
  uploadMIS: jest.fn(),
  
  // SXP APIs
  cancelSXP: jest.fn(),
  getSXPHistory: jest.fn(),
  getSXP: jest.fn(),
  listSXP: jest.fn(),
  resumeSXP: jest.fn(),
  setSXPPause: jest.fn(),
  topupSXP: jest.fn(),
  registerSXP: jest.fn(),
  registerSXPCSV: jest.fn(),
  
  // UCC APIs
  resendUCC2FALink: jest.fn(),
  runUCCCSV: jest.fn(),
  updateUCC: jest.fn(),
  getUCC: jest.fn(),
  listUCC: jest.fn(),
  addUCC: jest.fn(),
  
  // User APIs
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

    test('POST /login - should handle login failure', async () => {
      const mockError = {
        response: {
          status: 401,
          data: { error: 'Invalid credentials' }
        }
      };

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'invalid@example.com',
          password: 'wrongpassword'
        })
        .expect(401);

      expect(response.body).toEqual({ error: 'Invalid credentials' });
    });

    test('POST /v2/get2faLink - should get 2FA link successfully', async () => {
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

    test('POST /v2/get2faLink - should handle 2FA link failure', async () => {
      const mockError = {
        response: {
          status: 400,
          data: { error: 'User not found' }
        }
      };

      mockMfaClient.get2FALink.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/v2/get2faLink')
        .send({
          userId: 'invalid',
          email: 'invalid@example.com'
        })
        .expect(400);

      expect(response.body).toEqual({ error: 'User not found' });
    });
  });

  describe('Mandate APIs', () => {
    test('POST /mandate/link - should link mandate successfully', async () => {
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

    test('POST /mandate/cancel - should cancel mandate successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Mandate cancelled successfully'
      };

      mockMfaClient.cancelMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/cancel')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.cancelMandate).toHaveBeenCalledWith({
        userId: '12345',
        mandateId: 'MANDATE001'
      });
    });

    test('POST /mandate/delink - should delink mandate successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Mandate delinked successfully'
      };

      mockMfaClient.delinkMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/delink')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.delinkMandate).toHaveBeenCalledWith({
        userId: '12345',
        mandateId: 'MANDATE001'
      });
    });

    test('POST /mandate/get - should get mandate details successfully', async () => {
      const mockResponse = {
        success: true,
        mandate: {
          id: 'MANDATE001',
          status: 'ACTIVE',
          bankAccount: '1234567890',
          amount: 10000
        }
      };

      mockMfaClient.getMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/get')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getMandate).toHaveBeenCalledWith({
        userId: '12345',
        mandateId: 'MANDATE001'
      });
    });

    test('POST /mandate/list - should list mandates successfully', async () => {
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

    test('POST /mandate/update - should update mandate successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Mandate updated successfully'
      };

      mockMfaClient.updateMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/update')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001',
          amount: 15000
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.updateMandate).toHaveBeenCalledWith({
        userId: '12345',
        mandateId: 'MANDATE001',
        amount: 15000
      });
    });

    test('POST /mandate/register - should register mandate successfully', async () => {
      const mockResponse = {
        success: true,
        mandateId: 'MANDATE001',
        message: 'Mandate registered successfully'
      };

      mockMfaClient.registerMandate.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/register')
        .send({
          userId: '12345',
          bankAccount: '1234567890',
          amount: 10000
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.registerMandate).toHaveBeenCalledWith({
        userId: '12345',
        bankAccount: '1234567890',
        amount: 10000
      });
    });

    test('POST /mandate/register/csv - should register mandate CSV successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Mandate CSV registered successfully',
        processedCount: 10
      };

      mockMfaClient.registerMandateCSV.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/register/csv')
        .send({
          userId: '12345',
          csvData: 'base64-encoded-csv-data'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.registerMandateCSV).toHaveBeenCalledWith({
        userId: '12345',
        csvData: 'base64-encoded-csv-data'
      });
    });
  });

  describe('Master Data APIs', () => {
    test('POST /masterSchemeList - should get master scheme list successfully', async () => {
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

    test('POST /nav/masterList - should get NAV master list successfully', async () => {
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
    test('POST /nft/bankAccountChange - should change bank account successfully', async () => {
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

    test('POST /nft/contactChange - should change contact successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Contact changed successfully',
        newContact: '9876543210'
      };

      mockMfaClient.changeNFTContact.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/nft/contactChange')
        .send({
          userId: '12345',
          newContact: '9876543210',
          email: 'newemail@example.com'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.changeNFTContact).toHaveBeenCalledWith({
        userId: '12345',
        newContact: '9876543210',
        email: 'newemail@example.com'
      });
    });

    test('POST /nft/nomineeChange - should change nominee successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Nominee changed successfully',
        newNominee: 'John Doe'
      };

      mockMfaClient.changeNFTNominee.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/nft/nomineeChange')
        .send({
          userId: '12345',
          newNominee: 'John Doe',
          relationship: 'Son'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.changeNFTNominee).toHaveBeenCalledWith({
        userId: '12345',
        newNominee: 'John Doe',
        relationship: 'Son'
      });
    });
  });

  describe('Order Manager APIs', () => {
    test('POST /order/getPaymentDetail - should get payment detail successfully', async () => {
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
        .post('/order/getPaymentDetail')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getPaymentDetail).toHaveBeenCalledWith({
        orderId: 'ORDER001'
      });
    });

    test('POST /order/listPaymentDetail - should list payment details successfully', async () => {
      const mockResponse = {
        success: true,
        paymentDetails: [
          { orderId: 'ORDER001', amount: 10000, status: 'PAID' },
          { orderId: 'ORDER002', amount: 5000, status: 'PENDING' }
        ],
        total: 2
      };

      mockMfaClient.listPaymentDetails.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/listPaymentDetail')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.listPaymentDetails).toHaveBeenCalledWith({
        userId: '12345'
      });
    });

    test('POST /order/cancel - should cancel order successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Order cancelled successfully'
      };

      mockMfaClient.cancelOrder.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/cancel')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.cancelOrder).toHaveBeenCalledWith({
        orderId: 'ORDER001'
      });
    });

    test('POST /order/get - should get order details successfully', async () => {
      const mockResponse = {
        success: true,
        order: {
          id: 'ORDER001',
          status: 'COMPLETED',
          amount: 10000,
          schemeCode: 'SCHEME001'
        }
      };

      mockMfaClient.getOrder.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/get')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getOrder).toHaveBeenCalledWith({
        orderId: 'ORDER001'
      });
    });

    test('POST /order/list - should list orders successfully', async () => {
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

    test('POST /order/new - should create new order successfully', async () => {
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

    test('POST /order/update - should update order successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Order updated successfully'
      };

      mockMfaClient.updateOrder.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/order/update')
        .send({
          orderId: 'ORDER001',
          amount: 15000
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.updateOrder).toHaveBeenCalledWith({
        orderId: 'ORDER001',
        amount: 15000
      });
    });
  });

  describe('Payment Gateway APIs', () => {
    test('POST /payment/getExchpgService - should get exchange PG service successfully', async () => {
      const mockResponse = {
        success: true,
        pgServices: [
          { id: 'PG001', name: 'Razorpay', status: 'ACTIVE' },
          { id: 'PG002', name: 'PayU', status: 'ACTIVE' }
        ]
      };

      mockMfaClient.getExchangePGService.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/payment/getExchpgService')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getExchangePGService).toHaveBeenCalledWith({
        userId: '12345'
      });
    });

    test('POST /payment/sendPaymentInfo - should send payment info successfully', async () => {
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

  describe('Payment Manager APIs', () => {
    test('POST /payment/getMisDetail - should get MIS detail successfully', async () => {
      const mockResponse = {
        success: true,
        misDetails: {
          orderId: 'ORDER001',
          amount: 10000,
          commission: 100,
          netAmount: 9900
        }
      };

      mockMfaClient.getMISDetail.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/payment/getMisDetail')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getMISDetail).toHaveBeenCalledWith({
        orderId: 'ORDER001'
      });
    });

    test('POST /payment/uploadMis - should upload MIS successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'MIS uploaded successfully',
        uploadedCount: 5
      };

      mockMfaClient.uploadMIS.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/payment/uploadMis')
        .send({
          userId: '12345',
          misData: 'base64-encoded-mis-data'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.uploadMIS).toHaveBeenCalledWith({
        userId: '12345',
        misData: 'base64-encoded-mis-data'
      });
    });
  });

  describe('SXP APIs', () => {
    test('POST /sxp/cancel - should cancel SXP successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'SXP cancelled successfully'
      };

      mockMfaClient.cancelSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/cancel')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.cancelSXP).toHaveBeenCalledWith({
        sxpId: 'SXP001'
      });
    });

    test('POST /sxp/getHistory - should get SXP history successfully', async () => {
      const mockResponse = {
        success: true,
        history: [
          { date: '2024-01-15', amount: 5000, status: 'SUCCESS' },
          { date: '2024-01-08', amount: 5000, status: 'SUCCESS' }
        ],
        total: 2
      };

      mockMfaClient.getSXPHistory.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/getHistory')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getSXPHistory).toHaveBeenCalledWith({
        sxpId: 'SXP001'
      });
    });

    test('POST /sxp/get - should get SXP details successfully', async () => {
      const mockResponse = {
        success: true,
        sxp: {
          id: 'SXP001',
          status: 'ACTIVE',
          amount: 5000,
          frequency: 'MONTHLY'
        }
      };

      mockMfaClient.getSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/get')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getSXP).toHaveBeenCalledWith({
        sxpId: 'SXP001'
      });
    });

    test('POST /sxp/list - should list SXP successfully', async () => {
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

    test('POST /sxp/resume - should resume SXP successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'SXP resumed successfully'
      };

      mockMfaClient.resumeSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/resume')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.resumeSXP).toHaveBeenCalledWith({
        sxpId: 'SXP001'
      });
    });

    test('POST /sxp/setPause - should set SXP pause successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'SXP paused successfully'
      };

      mockMfaClient.setSXPPause.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/setPause')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.setSXPPause).toHaveBeenCalledWith({
        sxpId: 'SXP001'
      });
    });

    test('POST /sxp/topup - should topup SXP successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'SXP topped up successfully',
        newAmount: 8000
      };

      mockMfaClient.topupSXP.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/topup')
        .send({
          sxpId: 'SXP001',
          additionalAmount: 3000
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.topupSXP).toHaveBeenCalledWith({
        sxpId: 'SXP001',
        additionalAmount: 3000
      });
    });

    test('POST /sxp/register - should register SXP successfully', async () => {
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

    test('POST /sxp/register/csv - should register SXP CSV successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'SXP CSV registered successfully',
        processedCount: 8
      };

      mockMfaClient.registerSXPCSV.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/sxp/register/csv')
        .send({
          userId: '12345',
          csvData: 'base64-encoded-csv-data'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.registerSXPCSV).toHaveBeenCalledWith({
        userId: '12345',
        csvData: 'base64-encoded-csv-data'
      });
    });
  });

  describe('UCC APIs', () => {
    test('POST /ucc/2faResendLink - should resend UCC 2FA link successfully', async () => {
      const mockResponse = {
        success: true,
        message: '2FA link resent successfully'
      };

      mockMfaClient.resendUCC2FALink.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/2faResendLink')
        .send({
          userId: '12345',
          email: 'test@example.com'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.resendUCC2FALink).toHaveBeenCalledWith({
        userId: '12345',
        email: 'test@example.com'
      });
    });

    test('POST /ucc/csvRunner - should run UCC CSV successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'UCC CSV processed successfully',
        processedCount: 12
      };

      mockMfaClient.runUCCCSV.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/csvRunner')
        .send({
          userId: '12345',
          csvData: 'base64-encoded-csv-data'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.runUCCCSV).toHaveBeenCalledWith({
        userId: '12345',
        csvData: 'base64-encoded-csv-data'
      });
    });

    test('POST /ucc/v2/updateUcc - should update UCC successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'UCC updated successfully'
      };

      mockMfaClient.updateUCC.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/v2/updateUcc')
        .send({
          uccId: 'UCC001',
          holdingNature: 'JOINT'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.updateUCC).toHaveBeenCalledWith({
        uccId: 'UCC001',
        holdingNature: 'JOINT'
      });
    });

    test('POST /ucc/v2/getUcc - should get UCC successfully', async () => {
      const mockResponse = {
        success: true,
        ucc: {
          id: 'UCC001',
          status: 'ACTIVE',
          holdingNature: 'JOINT',
          schemeCode: 'SCHEME001'
        }
      };

      mockMfaClient.getUCC.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/ucc/v2/getUcc')
        .send({
          uccId: 'UCC001'
        })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
      expect(mockMfaClient.getUCC).toHaveBeenCalledWith({
        uccId: 'UCC001'
      }, 'application/json');
    });

    test('POST /ucc/v2/listUcc - should list UCC successfully', async () => {
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

    test('POST /ucc/v2/addUcc - should add UCC successfully', async () => {
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
  });

  describe('Error Handling', () => {
    test('should handle API errors with response status', async () => {
      const mockError = {
        response: {
          status: 400,
          data: { error: 'Invalid request parameters' }
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

      expect(response.body).toEqual({ error: 'Invalid request parameters' });
    });

    test('should handle network errors without response', async () => {
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

    test('should handle errors with response but no status', async () => {
      const mockError = {
        response: {
          data: { error: 'Server error' }
        }
      };

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(500);

      expect(response.body).toEqual({ error: 'Server error' });
    });
  });

  describe('Health Check and Documentation', () => {
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
      expect(response.body.endpoints).toHaveProperty('POST /mandate/link');
      expect(response.body.endpoints).toHaveProperty('POST /sxp/register');
      expect(response.body.endpoints).toHaveProperty('POST /ucc/v2/addUcc');
    });
  });

  describe('Input Validation', () => {
    test('should handle missing required fields', async () => {
      const mockError = {
        response: {
          status: 400,
          data: { error: 'Missing required fields' }
        }
      };

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({})
        .expect(400);

      expect(response.body).toEqual({ error: 'Missing required fields' });
    });

    test('should handle invalid JSON', async () => {
      const response = await request(app)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send('invalid json')
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty response body', async () => {
      const mockResponse = {};

      mockMfaClient.login.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(200);

      expect(response.body).toEqual({});
    });

    test('should handle null response', async () => {
      const mockResponse = null;

      mockMfaClient.login.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(200);

      expect(response.body).toBeNull();
    });

    test('should handle large payload', async () => {
      const largePayload = {
        userId: '12345',
        data: 'x'.repeat(10000) // 10KB payload
      };

      const mockResponse = {
        success: true,
        message: 'Large payload processed successfully'
      };

      mockMfaClient.registerMandateCSV.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/mandate/register/csv')
        .send(largePayload)
        .expect(200);

      expect(response.body).toEqual(mockResponse);
    });

    test('should handle timeout scenarios', async () => {
      const mockError = new Error('Request timeout');
      mockError.name = 'TimeoutError';

      mockMfaClient.login.mockRejectedValue(mockError);

      const response = await request(app)
        .post('/login')
        .send({
          username: 'test@example.com',
          password: 'password123'
        })
        .expect(500);

      expect(response.body).toEqual({ error: 'Request timeout' });
    });

    test('should handle malformed response data', async () => {
      const mockResponse = {
        success: true,
        data: undefined,
        message: null
      };

      mockMfaClient.getMasterSchemeList.mockResolvedValue(mockResponse);

      const response = await request(app)
        .post('/masterSchemeList')
        .send({ category: 'EQUITY' })
        .expect(200);

      expect(response.body).toEqual(mockResponse);
    });

    test('should handle concurrent requests', async () => {
      const mockResponse = {
        success: true,
        message: 'Request processed'
      };

      mockMfaClient.login.mockResolvedValue(mockResponse);

      const promises = Array(5).fill(null).map(() =>
        request(app)
          .post('/login')
          .send({
            username: 'test@example.com',
            password: 'password123'
          })
      );

      const responses = await Promise.all(promises);

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
      });

      expect(mockMfaClient.login).toHaveBeenCalledTimes(5);
    });
  });

  describe('Business Logic Scenarios', () => {
    test('should handle order lifecycle - create, update, cancel', async () => {
      // Create order
      const createResponse = {
        success: true,
        orderId: 'ORDER001',
        status: 'PENDING'
      };
      mockMfaClient.createNewOrder.mockResolvedValue(createResponse);

      const createResult = await request(app)
        .post('/order/new')
        .send({
          userId: '12345',
          schemeCode: 'SCHEME001',
          amount: 10000
        })
        .expect(200);

      expect(createResult.body).toEqual(createResponse);

      // Update order
      const updateResponse = {
        success: true,
        message: 'Order updated successfully'
      };
      mockMfaClient.updateOrder.mockResolvedValue(updateResponse);

      const updateResult = await request(app)
        .post('/order/update')
        .send({
          orderId: 'ORDER001',
          amount: 15000
        })
        .expect(200);

      expect(updateResult.body).toEqual(updateResponse);

      // Cancel order
      const cancelResponse = {
        success: true,
        message: 'Order cancelled successfully'
      };
      mockMfaClient.cancelOrder.mockResolvedValue(cancelResponse);

      const cancelResult = await request(app)
        .post('/order/cancel')
        .send({
          orderId: 'ORDER001'
        })
        .expect(200);

      expect(cancelResult.body).toEqual(cancelResponse);
    });

    test('should handle mandate workflow - register, link, update, cancel', async () => {
      // Register mandate
      const registerResponse = {
        success: true,
        mandateId: 'MANDATE001'
      };
      mockMfaClient.registerMandate.mockResolvedValue(registerResponse);

      const registerResult = await request(app)
        .post('/mandate/register')
        .send({
          userId: '12345',
          bankAccount: '1234567890',
          amount: 10000
        })
        .expect(200);

      expect(registerResult.body).toEqual(registerResponse);

      // Link mandate
      const linkResponse = {
        success: true,
        message: 'Mandate linked successfully'
      };
      mockMfaClient.linkMandate.mockResolvedValue(linkResponse);

      const linkResult = await request(app)
        .post('/mandate/link')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001',
          bankAccount: '1234567890'
        })
        .expect(200);

      expect(linkResult.body).toEqual(linkResponse);

      // Update mandate
      const updateResponse = {
        success: true,
        message: 'Mandate updated successfully'
      };
      mockMfaClient.updateMandate.mockResolvedValue(updateResponse);

      const updateResult = await request(app)
        .post('/mandate/update')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001',
          amount: 15000
        })
        .expect(200);

      expect(updateResult.body).toEqual(updateResponse);

      // Cancel mandate
      const cancelResponse = {
        success: true,
        message: 'Mandate cancelled successfully'
      };
      mockMfaClient.cancelMandate.mockResolvedValue(cancelResponse);

      const cancelResult = await request(app)
        .post('/mandate/cancel')
        .send({
          userId: '12345',
          mandateId: 'MANDATE001'
        })
        .expect(200);

      expect(cancelResult.body).toEqual(cancelResponse);
    });

    test('should handle SXP lifecycle - register, pause, resume, cancel', async () => {
      // Register SXP
      const registerResponse = {
        success: true,
        sxpId: 'SXP001',
        status: 'ACTIVE'
      };
      mockMfaClient.registerSXP.mockResolvedValue(registerResponse);

      const registerResult = await request(app)
        .post('/sxp/register')
        .send({
          userId: '12345',
          schemeCode: 'SCHEME001',
          amount: 5000,
          frequency: 'MONTHLY'
        })
        .expect(200);

      expect(registerResult.body).toEqual(registerResponse);

      // Pause SXP
      const pauseResponse = {
        success: true,
        message: 'SXP paused successfully'
      };
      mockMfaClient.setSXPPause.mockResolvedValue(pauseResponse);

      const pauseResult = await request(app)
        .post('/sxp/setPause')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(pauseResult.body).toEqual(pauseResponse);

      // Resume SXP
      const resumeResponse = {
        success: true,
        message: 'SXP resumed successfully'
      };
      mockMfaClient.resumeSXP.mockResolvedValue(resumeResponse);

      const resumeResult = await request(app)
        .post('/sxp/resume')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(resumeResult.body).toEqual(resumeResponse);

      // Cancel SXP
      const cancelResponse = {
        success: true,
        message: 'SXP cancelled successfully'
      };
      mockMfaClient.cancelSXP.mockResolvedValue(cancelResponse);

      const cancelResult = await request(app)
        .post('/sxp/cancel')
        .send({
          sxpId: 'SXP001'
        })
        .expect(200);

      expect(cancelResult.body).toEqual(cancelResponse);
    });

    test('should handle UCC workflow - add, update, list', async () => {
      // Add UCC
      const addResponse = {
        success: true,
        uccId: 'UCC001',
        status: 'ACTIVE'
      };
      mockMfaClient.addUCC.mockResolvedValue(addResponse);

      const addResult = await request(app)
        .post('/ucc/v2/addUcc')
        .send({
          userId: '12345',
          uccCode: 'UCC001',
          holdingNature: 'JOINT'
        })
        .expect(200);

      expect(addResult.body).toEqual(addResponse);

      // Update UCC
      const updateResponse = {
        success: true,
        message: 'UCC updated successfully'
      };
      mockMfaClient.updateUCC.mockResolvedValue(updateResponse);

      const updateResult = await request(app)
        .post('/ucc/v2/updateUcc')
        .send({
          uccId: 'UCC001',
          holdingNature: 'SINGLE'
        })
        .expect(200);

      expect(updateResult.body).toEqual(updateResponse);

      // List UCC
      const listResponse = {
        success: true,
        uccList: [
          { id: 'UCC001', status: 'ACTIVE', holdingNature: 'SINGLE' }
        ],
        total: 1
      };
      mockMfaClient.listUCC.mockResolvedValue(listResponse);

      const listResult = await request(app)
        .post('/ucc/v2/listUcc')
        .send({
          userId: '12345'
        })
        .expect(200);

      expect(listResult.body).toEqual(listResponse);
    });
  });

  describe('Performance and Load Testing Scenarios', () => {
    test('should handle rapid successive requests', async () => {
      const mockResponse = {
        success: true,
        message: 'Request processed'
      };

      mockMfaClient.getMasterSchemeList.mockResolvedValue(mockResponse);

      const startTime = Date.now();
      const promises = Array(10).fill(null).map(() =>
        request(app)
          .post('/masterSchemeList')
          .send({ category: 'EQUITY' })
      );

      const responses = await Promise.all(promises);
      const endTime = Date.now();

      responses.forEach(response => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse);
      });

      expect(mockMfaClient.getMasterSchemeList).toHaveBeenCalledTimes(10);
      expect(endTime - startTime).toBeLessThan(5000); // Should complete within 5 seconds
    });

    test('should handle mixed API calls', async () => {
      const loginResponse = { success: true, token: 'token123' };
      const orderResponse = { success: true, orderId: 'ORDER001' };
      const mandateResponse = { success: true, mandateId: 'MANDATE001' };

      mockMfaClient.login.mockResolvedValue(loginResponse);
      mockMfaClient.createNewOrder.mockResolvedValue(orderResponse);
      mockMfaClient.registerMandate.mockResolvedValue(mandateResponse);

      const [loginResult, orderResult, mandateResult] = await Promise.all([
        request(app).post('/login').send({ username: 'test', password: 'pass' }),
        request(app).post('/order/new').send({ userId: '123', schemeCode: 'SCHEME001', amount: 1000 }),
        request(app).post('/mandate/register').send({ userId: '123', bankAccount: '1234567890', amount: 1000 })
      ]);

      expect(loginResult.status).toBe(200);
      expect(orderResult.status).toBe(200);
      expect(mandateResult.status).toBe(200);

      expect(loginResult.body).toEqual(loginResponse);
      expect(orderResult.body).toEqual(orderResponse);
      expect(mandateResult.body).toEqual(mandateResponse);
    });
  });
});
