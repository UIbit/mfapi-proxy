import axios, { AxiosInstance } from 'axios';
import { CreateInvestorPayload, PlaceOrderPayload, AddUCCPayload } from './types/apiPayloads';

export class MfapiClient {
  private api: AxiosInstance;

  constructor(private baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  async createInvestor(payload: CreateInvestorPayload) {
    const response = await this.api.post('/onboarding/create', payload);
    return response.data;
  }

  async placeOrder(payload: PlaceOrderPayload) {
    const response = await this.api.post('/transaction/order', payload);
    return response.data;
  }

  async addUCC(payload: AddUCCPayload) {
    const response = await this.api.post('/v2/add_ucc', payload);
    return response.data;
  }

  // Add more methods with appropriate typed payloads if needed
}
