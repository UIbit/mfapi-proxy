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

  // ===== ACCESS TOKEN API =====
  async login(credentials: any) {
    const response = await this.axiosInstance.post('/login', credentials);
    return response.data;
  }

  // ===== CLASS 2FA API =====
  async get2FALink(data: any) {
    const response = await this.axiosInstance.post('/v2/get2faLink', data);
    return response.data;
  }

  // ===== MANDATE API =====
  async linkMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/link', data);
    return response.data;
  }

  async cancelMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/cancel', data);
    return response.data;
  }

  async delinkMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/delink', data);
    return response.data;
  }

  async getMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/get', data);
    return response.data;
  }

  async listMandates(data: any) {
    const response = await this.axiosInstance.post('/mandate/list', data);
    return response.data;
  }

  async updateMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/update', data);
    return response.data;
  }

  // ===== MANDATE REGISTER API =====
  async registerMandate(data: any) {
    const response = await this.axiosInstance.post('/mandate/register', data);
    return response.data;
  }

  async registerMandateCSV(data: any) {
    const response = await this.axiosInstance.post('/mandate/register/csv', data);
    return response.data;
  }

  // ===== MASTER SCHEME LIST API =====
  async getMasterSchemeList(data: any) {
    const response = await this.axiosInstance.post('/masterSchemeList', data);
    return response.data;
  }

  // ===== NAV API =====
  async getNAVMasterList(data: any) {
    const response = await this.axiosInstance.post('/nav/masterList', data);
    return response.data;
  }

  // ===== NFT CAMS API =====
  async changeNFTBankAccount(data: any) {
    const response = await this.axiosInstance.post('/nft/bankAccountChange', data);
    return response.data;
  }

  async changeNFTContact(data: any) {
    const response = await this.axiosInstance.post('/nft/contactChange', data);
    return response.data;
  }

  async changeNFTNominee(data: any) {
    const response = await this.axiosInstance.post('/nft/nomineeChange', data);
    return response.data;
  }

  // ===== ORDER MANAGER API =====
  async getPaymentDetail(data: any) {
    const response = await this.axiosInstance.post('/order/getPaymentDetail', data);
    return response.data;
  }

  async listPaymentDetails(data: any) {
    const response = await this.axiosInstance.post('/order/listPaymentDetail', data);
    return response.data;
  }

  async cancelOrder(data: any) {
    const response = await this.axiosInstance.post('/order/cancel', data);
    return response.data;
  }

  async getOrder(data: any) {
    const response = await this.axiosInstance.post('/order/get', data);
    return response.data;
  }

  async listOrders(data: any) {
    const response = await this.axiosInstance.post('/order/list', data);
    return response.data;
  }

  // ===== ORDER MANAGER ORDER NEW API =====
  async createNewOrder(data: any) {
    const response = await this.axiosInstance.post('/order/new', data);
    return response.data;
  }

  // ===== ORDER MANAGER ORDER UPDATE API =====
  async updateOrder(data: any) {
    const response = await this.axiosInstance.post('/order/update', data);
    return response.data;
  }

  // ===== PAYMENT GATEWAY API =====
  async getExchangePGService(data: any) {
    const response = await this.axiosInstance.post('/payment/getExchpgService', data);
    return response.data;
  }

  async sendPaymentInfo(data: any) {
    const response = await this.axiosInstance.post('/payment/sendPaymentInfo', data);
    return response.data;
  }

  // ===== PAYMENT MANAGER API =====
  async getMISDetail(data: any) {
    const response = await this.axiosInstance.post('/payment/getMisDetail', data);
    return response.data;
  }

  async uploadMIS(data: any) {
    const response = await this.axiosInstance.post('/payment/uploadMis', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE API =====
  async cancelSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/cancel', data);
    return response.data;
  }

  async getSXPHistory(data: any) {
    const response = await this.axiosInstance.post('/sxp/getHistory', data);
    return response.data;
  }

  async getSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/get', data);
    return response.data;
  }

  async listSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/list', data);
    return response.data;
  }

  async resumeSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/resume', data);
    return response.data;
  }

  async setSXPPause(data: any) {
    const response = await this.axiosInstance.post('/sxp/setPause', data);
    return response.data;
  }

  async topupSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/topup', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER API =====
  async registerSXP(data: any) {
    const response = await this.axiosInstance.post('/sxp/register', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER CSV API =====
  async registerSXPCSV(data: any) {
    const response = await this.axiosInstance.post('/sxp/register/csv', data);
    return response.data;
  }

  // ===== UCC 2FA RESEND LINK API =====
  async resendUCC2FALink(data: any) {
    const response = await this.axiosInstance.post('/ucc/2faResendLink', data);
    return response.data;
  }

  // ===== UCC ADD UCC ADD UCC CSV API =====
  async runUCCCSV(data: any) {
    const response = await this.axiosInstance.post('/ucc/csvRunner', data);
    return response.data;
  }

  // ===== UCC DEACTIVATE UCC API =====
  async updateUCC(data: any) {
    const response = await this.axiosInstance.post('/ucc/v2/updateUcc', data);
    return response.data;
  }

  // ===== UCC GET UCC API =====
  async getUCC(data: any, contentType?: string) {
    const headers = contentType ? { 'Content-Type': contentType } : {};
    const response = await this.axiosInstance.post('/ucc/v2/getUcc', data, { headers });
    return response.data;
  }

  // ===== UCC LIST UCC API =====
  async listUCC(data: any) {
    const response = await this.axiosInstance.post('/ucc/v2/listUcc', data);
    return response.data;
  }

  // ===== UCC UPDATE UCC UPDATE HOLDING NATURE API =====
  async addUCC(data: any) {
    const response = await this.axiosInstance.post('/ucc/v2/addUcc', data);
    return response.data;
  }

  // Example: call the user API (GET with query params) - keeping your original method
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

// Export a singleton instance
export const mfaClient = new Mfapiclient();
