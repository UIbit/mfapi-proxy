import express from 'express';
import dotenv from 'dotenv';
import { AccesTokenApi } from './generatedClient';  // Import the specific API class

dotenv.config();

const app = express();
app.use(express.json());

const baseUrl = process.env.POSTMAN_API_BASE_URL || '';
const accesTokenApi = new AccesTokenApi(undefined, baseUrl);

app.post('/login', async (req, res) => {
  try {
    // Your request body as per API specs
    const response = await accesTokenApi.baseUrlLoginPost({
      baseUrl,
      body: req.body,
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});
app.get('/', (_req, res) => {
  res.send('MFAPI Proxy Server is running!');
});

// Similarly, instantiate and use other APIs for different routes

export default app;
