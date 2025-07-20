import express from 'express';
import { MfapiClient } from './MfapiClient';

const app = express();
app.use(express.json());

const mfapi = new MfapiClient('https://staging-apis.mfapis.in/api');

// Onboarding proxy for Postman
app.post('/onboarding/create', async (req, res) => {
  try {
    const result = await mfapi.createInvestor(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({
      error: error?.response?.data || error.message || 'Server error'
    });
  }
});

// Place order proxy for Postman
app.post('/transaction/order', async (req, res) => {
  try {
    const result = await mfapi.placeOrder(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({
      error: error?.response?.data || error.message || 'Server error'
    });
  }
});

// Example member login (simple dummy)
app.post('/member/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'demo' && password === 'secret') {
    res.status(200).json({ status: 'SUCCESS', token: 'demo-token' });
  } else {
    res.status(401).json({ status: 'FAILURE', message: 'Invalid credentials' });
  }
});

// Health check
app.get('/', (req, res) => res.send('MFAPI Proxy Server is running!'));

export default app;
