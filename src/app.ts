import express from 'express';
import { MfapiClient } from './MfapiClient';
import { CreateInvestorPayload, PlaceOrderPayload, AddUCCPayload } from './types/apiPayloads';

const app = express();
app.use(express.json());

const mfapi = new MfapiClient(process.env.POSTMAN_API_BASE_URL || 'https://staging-apis.mfapis.in/api');

app.post('/onboarding/create', async (req, res) => {
  try {
    // Type assertion: assumes client sends correctly structured payload
    const payload = req.body as CreateInvestorPayload;
    const result = await mfapi.createInvestor(payload);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.response?.data || error.message || 'Server error' });
  }
});

app.post('/transaction/order', async (req, res) => {
  try {
    const payload = req.body as PlaceOrderPayload;
    const result = await mfapi.placeOrder(payload);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.response?.data || error.message || 'Server error' });
  }
});

app.post('/v2/add_ucc', async (req, res) => {
  try {
    const payload = req.body as AddUCCPayload;
    const result = await mfapi.addUCC(payload);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error?.response?.data || error.message || 'Server error' });
  }
});

// Health check route
app.get('/', (req, res) => res.send('MFAPI Proxy Server is running!'));

export default app;
