import axios, { AxiosInstance } from 'axios';

export class MfapiClient {
  private api: AxiosInstance;

  constructor(private baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  async createInvestor(payload: any) {
    return (await this.api.post('/onboarding/create', payload)).data;
  }

  async placeOrder(payload: any) {
    return (await this.api.post('/transaction/order', payload)).data;
  }

  // Add more methods for payments, reporting, etc.
}
