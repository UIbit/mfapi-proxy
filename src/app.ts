import express from 'express';
import dotenv from 'dotenv';
import { mfaClient } from './index';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Generic error handler
const handleApiError = (error: any, res: express.Response) => {
  if (error.response) {
    res.status(error.response.status || 500).json(error.response.data);
  } else {
    res.status(500).json({ error: error.message });
  }
};

// ===== ACCESS TOKEN API =====
app.post('/login', async (req, res) => {
  try {
    // Call the centralized client method
    const data = await mfaClient.login(req.body);
    // Return the response from the API to the client
    res.json(data);
  } catch (error: any) {
    // Handle errors: show underlying API error response, or just the message
    if (error.response) {
      res.status(error.response.status || 500).json(error.response.data);
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// ===== CLASS 2FA API =====
app.post('/v2/get2faLink', async (req, res) => {
  try {
    const data = await mfaClient.get2FALink(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== MANDATE API =====
app.post('/mandate/link', async (req, res) => {
  try {
    const data = await mfaClient.linkMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/mandate/cancel', async (req, res) => {
  try {
    const data = await mfaClient.cancelMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/mandate/delink', async (req, res) => {
  try {
    const data = await mfaClient.delinkMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/mandate/get', async (req, res) => {
  try {
    const data = await mfaClient.getMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/mandate/list', async (req, res) => {
  try {
    const data = await mfaClient.listMandates(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/mandate/update', async (req, res) => {
  try {
    const data = await mfaClient.updateMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== MANDATE REGISTER API =====
app.post('/mandate/register', async (req, res) => {
  try {
    const data = await mfaClient.registerMandate(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== MANDATE REGISTER CSV API =====
app.post('/mandate/register/csv', async (req, res) => {
  try {
    const data = await mfaClient.registerMandateCSV(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== MASTER SCHEME LIST API =====
app.post('/masterSchemeList', async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.userId) {
      return res.status(400).json({
        success: false,
        message: 'userId is required'
      });
    }

    // Validate optional fields
    const { 
      userId, 
      category, 
      schemeCode, 
      schemeName, 
      fundHouse, 
      fundType, 
      page, 
      limit, 
      sortBy, 
      sortOrder, 
      status, 
      minNav, 
      maxNav, 
      fundManager, 
      isin 
    } = req.body;

    // Validate sortBy if provided
    if (sortBy && !['name', 'code', 'category', 'nav', 'launchDate'].includes(sortBy)) {
      return res.status(400).json({
        success: false,
        message: 'sortBy must be one of: name, code, category, nav, launchDate'
      });
    }

    // Validate sortOrder if provided
    if (sortOrder && !['asc', 'desc'].includes(sortOrder)) {
      return res.status(400).json({
        success: false,
        message: 'sortOrder must be one of: asc, desc'
      });
    }

    // Validate status if provided
    if (status && !['active', 'inactive', 'all'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'status must be one of: active, inactive, all'
      });
    }

    // Validate numeric fields
    if (page && (typeof page !== 'number' || page < 1)) {
      return res.status(400).json({
        success: false,
        message: 'page must be a positive number'
      });
    }

    if (limit && (typeof limit !== 'number' || limit < 1 || limit > 100)) {
      return res.status(400).json({
        success: false,
        message: 'limit must be a number between 1 and 100'
      });
    }

    if (minNav && (typeof minNav !== 'number' || minNav < 0)) {
      return res.status(400).json({
        success: false,
        message: 'minNav must be a non-negative number'
      });
    }

    if (maxNav && (typeof maxNav !== 'number' || maxNav < 0)) {
      return res.status(400).json({
        success: false,
        message: 'maxNav must be a non-negative number'
      });
    }

    const data = await mfaClient.getMasterSchemeList(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== NAV API =====
app.post('/nav/masterList', async (req, res) => {
  try {
    const data = await mfaClient.getNAVMasterList(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== NFT CAMS API =====
app.post('/nft/bankAccountChange', async (req, res) => {
  try {
    const data = await mfaClient.changeNFTBankAccount(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/nft/contactChange', async (req, res) => {
  try {
    const data = await mfaClient.changeNFTContact(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/nft/nomineeChange', async (req, res) => {
  try {
    const data = await mfaClient.changeNFTNominee(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== ORDER MANAGER API =====
app.post('/order/getPaymentDetail', async (req, res) => {
  try {
    const data = await mfaClient.getPaymentDetail(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/order/listPaymentDetail', async (req, res) => {
  try {
    const data = await mfaClient.listPaymentDetails(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/order/cancel', async (req, res) => {
  try {
    const data = await mfaClient.cancelOrder(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/order/get', async (req, res) => {
  try {
    const data = await mfaClient.getOrder(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/order/list', async (req, res) => {
  try {
    const data = await mfaClient.listOrders(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== ORDER MANAGER ORDER NEW API =====
app.post('/order/new', async (req, res) => {
  try {
    const data = await mfaClient.createNewOrder(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== ORDER MANAGER ORDER UPDATE API =====
app.post('/order/update', async (req, res) => {
  try {
    const data = await mfaClient.updateOrder(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== PAYMENT GATEWAY API =====
app.post('/payment/getExchpgService', async (req, res) => {
  try {
    const data = await mfaClient.getExchangePGService(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/payment/sendPaymentInfo', async (req, res) => {
  try {
    const data = await mfaClient.sendPaymentInfo(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== PAYMENT AGGREGATOR API =====
app.post('/payment/aggregator', async (req, res) => {
  try {
    const data = await mfaClient.processPaymentAggregator(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== BSE PAYMENT GATEWAY API =====
app.post('/payment/bse/single', async (req, res) => {
  try {
    const data = await mfaClient.requestSinglePaymentBSEPG(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/payment/bse/sendInfo', async (req, res) => {
  try {
    const data = await mfaClient.sendPaymentInfoBSEPG(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== PAYMENT MANAGER API =====
app.post('/payment/getMisDetail', async (req, res) => {
  try {
    const data = await mfaClient.getMISDetail(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/payment/uploadMis', async (req, res) => {
  try {
    const data = await mfaClient.uploadMIS(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== SYSTEMATIC ORDERS ENGINE API =====
app.post('/sxp/cancel', async (req, res) => {
  try {
    const data = await mfaClient.cancelSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/getHistory', async (req, res) => {
  try {
    const data = await mfaClient.getSXPHistory(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/get', async (req, res) => {
  try {
    const data = await mfaClient.getSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/list', async (req, res) => {
  try {
    const data = await mfaClient.listSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/resume', async (req, res) => {
  try {
    const data = await mfaClient.resumeSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/setPause', async (req, res) => {
  try {
    const data = await mfaClient.setSXPPause(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

app.post('/sxp/topup', async (req, res) => {
  try {
    const data = await mfaClient.topupSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER API =====
app.post('/sxp/register', async (req, res) => {
  try {
    const data = await mfaClient.registerSXP(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER CSV API =====
app.post('/sxp/register/csv', async (req, res) => {
  try {
    const data = await mfaClient.registerSXPCSV(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC 2FA RESEND LINK API =====
app.post('/ucc/2faResendLink', async (req, res) => {
  try {
    const data = await mfaClient.resendUCC2FALink(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC ADD UCC ADD UCC CSV API =====
app.post('/ucc/csvRunner', async (req, res) => {
  try {
    const data = await mfaClient.runUCCCSV(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC DEACTIVATE UCC API =====
app.post('/ucc/v2/updateUcc', async (req, res) => {
  try {
    const data = await mfaClient.updateUCC(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC GET UCC API =====
app.post('/ucc/v2/getUcc', async (req, res) => {
  try {
    const data = await mfaClient.getUCC(req.body, req.headers['content-type'] as string);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC LIST UCC API =====
app.post('/ucc/v2/listUcc', async (req, res) => {
  try {
    const data = await mfaClient.listUCC(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// ===== UCC UPDATE UCC UPDATE HOLDING NATURE API =====
app.post('/ucc/v2/addUcc', async (req, res) => {
  try {
    const data = await mfaClient.addUCC(req.body);
    res.json(data);
  } catch (error: any) {
    handleApiError(error, res);
  }
});

// Optional: simple healthcheck route for browser browsing
app.get('/', (_req, res) => {
  res.send('MFAPI Proxy Server is running!');
});

// API documentation route
app.get('/api-docs', (_req, res) => {
  res.json({
    message: 'MFAPI Proxy Server API Documentation',
    endpoints: {
      'POST /login': 'Member Login',
      'POST /v2/get2faLink': 'Get 2FA Link',
      'POST /mandate/link': 'Link Mandate',
      'POST /mandate/cancel': 'Cancel Mandate',
      'POST /mandate/delink': 'Delink Mandate',
      'POST /mandate/get': 'Get Mandate',
      'POST /mandate/list': 'List Mandates',
      'POST /mandate/update': 'Update Mandate',
      'POST /mandate/register': 'Register Mandate',
      'POST /mandate/register/csv': 'Register Mandate CSV',
      'POST /masterSchemeList': 'Get Master Scheme List',
      'POST /nav/masterList': 'Get NAV Master List',
      'POST /nft/bankAccountChange': 'NFT Bank Account Change',
      'POST /nft/contactChange': 'NFT Contact Change',
      'POST /nft/nomineeChange': 'NFT Nominee Change',
      'POST /order/getPaymentDetail': 'Get Payment Detail',
      'POST /order/listPaymentDetail': 'List Payment Details',
      'POST /order/cancel': 'Cancel Order',
      'POST /order/get': 'Get Order',
      'POST /order/list': 'List Orders',
      'POST /order/new': 'Create New Order',
      'POST /order/update': 'Update Order',
      'POST /payment/getExchpgService': 'Get Exchange PG Service',
      'POST /payment/sendPaymentInfo': 'Send Payment Info',
      'POST /payment/aggregator': 'Payment Aggregator',
      'POST /payment/bse/single': 'Request Single Payment BSE PG',
      'POST /payment/bse/sendInfo': 'Send Payment Info BSE PG',
      'POST /payment/getMisDetail': 'Get MIS Detail',
      'POST /payment/uploadMis': 'Upload MIS',
      'POST /sxp/cancel': 'Cancel SXP',
      'POST /sxp/getHistory': 'Get SXP History',
      'POST /sxp/get': 'Get SXP',
      'POST /sxp/list': 'List SXP',
      'POST /sxp/resume': 'Resume SXP',
      'POST /sxp/setPause': 'Set SXP Pause',
      'POST /sxp/topup': 'Topup SXP',
      'POST /sxp/register': 'Register SXP',
      'POST /sxp/register/csv': 'Register SXP CSV',
      'POST /ucc/2faResendLink': 'Resend UCC 2FA Link',
      'POST /ucc/csvRunner': 'UCC CSV Runner',
      'POST /ucc/v2/updateUcc': 'Update UCC',
      'POST /ucc/v2/getUcc': 'Get UCC',
      'POST /ucc/v2/listUcc': 'List UCC',
      'POST /ucc/v2/addUcc': 'Add UCC'
    }
  });
});

export default app;
