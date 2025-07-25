import axios, { AxiosInstance } from 'axios';

export class Mfapiclient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.POSTMAN_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
  }

  // Example: call the user API (GET with query params)
  async getUserDetails(params: {userTab: number; investorId: string; investmentAccountId: string | null}) {
    const response = await this.axiosInstance.get('/user', { params });
    return response.data;
  }

  // Add more methods here for other Postman APIs
  // Example:
  /*
  async createInvestment(data: MyInvestmentDataType) {
    const response = await this.axiosInstance.post('/investment', data);
    return response.data;
  }
  */
}
