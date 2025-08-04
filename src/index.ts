import axios, { AxiosInstance } from 'axios';

// ===== TYPE DEFINITIONS =====

// Authentication Types
export interface LoginCredentials {
  username: string;
  password: string;
  [key: string]: any; // Allow additional fields
}

export interface TwoFALinkData {
  userId: string;
  email?: string;
  phone?: string;
  [key: string]: any;
}

// Mandate Types
export interface MandateData {
  userId: string;
  mandateId?: string;
  schemeCode?: string;
  folioNumber?: string;
  [key: string]: any;
}

export interface MandateListData {
  userId: string;
  page?: number;
  limit?: number;
  status?: string;
  [key: string]: any;
}

export interface MandateRegisterData {
  userId: string;
  schemeCode: string;
  folioNumber: string;
  amount?: number;
  frequency?: string;
  startDate?: string;
  [key: string]: any;
}

export interface MandateCSVData {
  userId: string;
  csvFile: string | Buffer;
  [key: string]: any;
}

// Master Data Types
export interface MasterSchemeListData {
  userId: string;
  category?: string;
  schemeCode?: string;
  schemeName?: string;
  fundHouse?: string;
  fundType?: string;
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'code' | 'category' | 'nav' | 'launchDate';
  sortOrder?: 'asc' | 'desc';
  status?: 'active' | 'inactive' | 'all';
  minNav?: number;
  maxNav?: number;
  fundManager?: string;
  isin?: string;
}

export interface MasterSchemeResponse {
  success: boolean;
  schemes: Array<{
    code: string;
    name: string;
    category: string;
    fundHouse?: string;
    fundType?: string;
    isin?: string;
    amcCode?: string;
    schemeType?: string;
    nav?: number;
    navDate?: string;
    minInvestment?: number;
    maxInvestment?: number;
    exitLoad?: string;
    expenseRatio?: number;
    fundManager?: string;
    launchDate?: string;
    status?: string;
  }>;
  total: number;
  message?: string;
  page?: number;
  limit?: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export interface NAVMasterListData {
  userId: string;
  schemeCode?: string;
  date?: string;
  [key: string]: any;
}

// NFT CAMS Types
export interface NFTBankAccountData {
  userId: string;
  folioNumber: string;
  bankAccountNumber: string;
  bankName: string;
  ifscCode: string;
  [key: string]: any;
}

export interface NFTContactData {
  userId: string;
  folioNumber: string;
  email?: string;
  phone?: string;
  address?: string;
  [key: string]: any;
}

export interface NFTNomineeData {
  userId: string;
  folioNumber: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineePercentage: number;
  [key: string]: any;
}

// Order Types
export interface OrderData {
  userId: string;
  orderId?: string;
  schemeCode?: string;
  folioNumber?: string;
  [key: string]: any;
}

export interface OrderListData {
  userId: string;
  page?: number;
  limit?: number;
  status?: string;
  fromDate?: string;
  toDate?: string;
  [key: string]: any;
}

export interface NewOrderData {
  userId: string;
  schemeCode: string;
  folioNumber: string;
  amount: number;
  orderType: 'PURCHASE' | 'REDEMPTION' | 'SWITCH';
  [key: string]: any;
}

export interface UpdateOrderData {
  userId: string;
  orderId: string;
  amount?: number;
  status?: string;
  [key: string]: any;
}

export interface PaymentDetailData {
  userId: string;
  orderId: string;
  [key: string]: any;
}

export interface PaymentDetailListData {
  userId: string;
  page?: number;
  limit?: number;
  fromDate?: string;
  toDate?: string;
  [key: string]: any;
}

// Payment Gateway Types
export interface ExchangePGServiceData {
  userId: string;
  schemeCode: string;
  amount: number;
  [key: string]: any;
}

export interface PaymentInfoData {
  userId: string;
  orderId: string;
  paymentMethod: string;
  paymentDetails: Record<string, any>;
  [key: string]: any;
}

// Payment Aggregator Types
export interface PaymentAggregatorData {
  userId: string;
  schemeCode: string;
  amount: number;
  paymentMethod: string;
  aggregatorType: string;
  [key: string]: any;
}

export interface SinglePaymentBSEPGData {
  userId: string;
  orderId: string;
  amount: number;
  paymentMethod: string;
  paymentDetails: Record<string, any>;
  [key: string]: any;
}

export interface SendPaymentInfoBSEPGData {
  userId: string;
  orderId: string;
  paymentStatus: string;
  transactionId?: string;
  paymentDetails: Record<string, any>;
  [key: string]: any;
}

// Payment Manager Types
export interface MISDetailData {
  userId: string;
  misId?: string;
  fromDate?: string;
  toDate?: string;
  [key: string]: any;
}

export interface UploadMISData {
  userId: string;
  misFile: string | Buffer;
  [key: string]: any;
}

// SXP (Systematic Orders) Types
export interface SXPData {
  userId: string;
  sxpId?: string;
  schemeCode?: string;
  folioNumber?: string;
  [key: string]: any;
}

export interface SXPListData {
  userId: string;
  page?: number;
  limit?: number;
  status?: string;
  [key: string]: any;
}

export interface SXPHistoryData {
  userId: string;
  sxpId: string;
  fromDate?: string;
  toDate?: string;
  [key: string]: any;
}

export interface RegisterSXPData {
  userId: string;
  schemeCode: string;
  folioNumber: string;
  amount: number;
  frequency: string;
  startDate: string;
  endDate?: string;
  [key: string]: any;
}

export interface SXPPauseData {
  userId: string;
  sxpId: string;
  pauseReason?: string;
  [key: string]: any;
}

export interface SXPTopupData {
  userId: string;
  sxpId: string;
  topupAmount: number;
  [key: string]: any;
}

export interface SXPCSVData {
  userId: string;
  csvFile: string | Buffer;
  [key: string]: any;
}

// UCC Types
export interface UCCData {
  userId: string;
  uccId?: string;
  folioNumber?: string;
  [key: string]: any;
}

export interface UCCListData {
  userId: string;
  page?: number;
  limit?: number;
  status?: string;
  [key: string]: any;
}

export interface AddUCCData {
  userId: string;
  folioNumber: string;
  schemeCode: string;
  holdingNature: string;
  [key: string]: any;
}

export interface UpdateUCCData {
  userId: string;
  uccId: string;
  holdingNature?: string;
  status?: string;
  [key: string]: any;
}

export interface UCCCSVData {
  userId: string;
  csvFile: string | Buffer;
  [key: string]: any;
}

export interface UCC2FAResendData {
  userId: string;
  uccId: string;
  email?: string;
  phone?: string;
  [key: string]: any;
}

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
  async login(credentials: LoginCredentials) {
    const response = await this.axiosInstance.post('/login', credentials);
    return response.data;
  }

  // ===== CLASS 2FA API =====
  async get2FALink(data: TwoFALinkData) {
    const response = await this.axiosInstance.post('/v2/get2faLink', data);
    return response.data;
  }

  // ===== MANDATE API =====
  async linkMandate(data: MandateData) {
    const response = await this.axiosInstance.post('/mandate/link', data);
    return response.data;
  }

  async cancelMandate(data: MandateData) {
    const response = await this.axiosInstance.post('/mandate/cancel', data);
    return response.data;
  }

  async delinkMandate(data: MandateData) {
    const response = await this.axiosInstance.post('/mandate/delink', data);
    return response.data;
  }

  async getMandate(data: MandateData) {
    const response = await this.axiosInstance.post('/mandate/get', data);
    return response.data;
  }

  async listMandates(data: MandateListData) {
    const response = await this.axiosInstance.post('/mandate/list', data);
    return response.data;
  }

  async updateMandate(data: MandateData) {
    const response = await this.axiosInstance.post('/mandate/update', data);
    return response.data;
  }

  // ===== MANDATE REGISTER API =====
  async registerMandate(data: MandateRegisterData) {
    const response = await this.axiosInstance.post('/mandate/register', data);
    return response.data;
  }

  async registerMandateCSV(data: MandateCSVData) {
    const response = await this.axiosInstance.post('/mandate/register/csv', data);
    return response.data;
  }

  // ===== MASTER SCHEME LIST API =====
  async getMasterSchemeList(data: MasterSchemeListData): Promise<MasterSchemeResponse> {
    const response = await this.axiosInstance.post('/masterSchemeList', data);
    return response.data;
  }

  // ===== NAV API =====
  async getNAVMasterList(data: NAVMasterListData) {
    const response = await this.axiosInstance.post('/nav/masterList', data);
    return response.data;
  }

  // ===== NFT CAMS API =====
  async changeNFTBankAccount(data: NFTBankAccountData) {
    const response = await this.axiosInstance.post('/nft/bankAccountChange', data);
    return response.data;
  }

  async changeNFTContact(data: NFTContactData) {
    const response = await this.axiosInstance.post('/nft/contactChange', data);
    return response.data;
  }

  async changeNFTNominee(data: NFTNomineeData) {
    const response = await this.axiosInstance.post('/nft/nomineeChange', data);
    return response.data;
  }

  // ===== ORDER MANAGER API =====
  async getPaymentDetail(data: PaymentDetailData) {
    const response = await this.axiosInstance.post('/order/getPaymentDetail', data);
    return response.data;
  }

  async listPaymentDetails(data: PaymentDetailListData) {
    const response = await this.axiosInstance.post('/order/listPaymentDetail', data);
    return response.data;
  }

  async cancelOrder(data: OrderData) {
    const response = await this.axiosInstance.post('/order/cancel', data);
    return response.data;
  }

  async getOrder(data: OrderData) {
    const response = await this.axiosInstance.post('/order/get', data);
    return response.data;
  }

  async listOrders(data: OrderListData) {
    const response = await this.axiosInstance.post('/order/list', data);
    return response.data;
  }

  // ===== ORDER MANAGER ORDER NEW API =====
  async createNewOrder(data: NewOrderData) {
    const response = await this.axiosInstance.post('/order/new', data);
    return response.data;
  }

  // ===== ORDER MANAGER ORDER UPDATE API =====
  async updateOrder(data: UpdateOrderData) {
    const response = await this.axiosInstance.post('/order/update', data);
    return response.data;
  }

  // ===== PAYMENT GATEWAY API =====
  async getExchangePGService(data: ExchangePGServiceData) {
    const response = await this.axiosInstance.post('/payment/getExchpgService', data);
    return response.data;
  }

  async sendPaymentInfo(data: PaymentInfoData) {
    const response = await this.axiosInstance.post('/payment/sendPaymentInfo', data);
    return response.data;
  }

  // ===== PAYMENT AGGREGATOR API =====
  async processPaymentAggregator(data: PaymentAggregatorData) {
    const response = await this.axiosInstance.post('/payment/aggregator', data);
    return response.data;
  }

  // ===== BSE PAYMENT GATEWAY API =====
  async requestSinglePaymentBSEPG(data: SinglePaymentBSEPGData) {
    const response = await this.axiosInstance.post('/payment/bse/single', data);
    return response.data;
  }

  async sendPaymentInfoBSEPG(data: SendPaymentInfoBSEPGData) {
    const response = await this.axiosInstance.post('/payment/bse/sendInfo', data);
    return response.data;
  }

  // ===== PAYMENT MANAGER API =====
  async getMISDetail(data: MISDetailData) {
    const response = await this.axiosInstance.post('/payment/getMisDetail', data);
    return response.data;
  }

  async uploadMIS(data: UploadMISData) {
    const response = await this.axiosInstance.post('/payment/uploadMis', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE API =====
  async cancelSXP(data: SXPData) {
    const response = await this.axiosInstance.post('/sxp/cancel', data);
    return response.data;
  }

  async getSXPHistory(data: SXPHistoryData) {
    const response = await this.axiosInstance.post('/sxp/getHistory', data);
    return response.data;
  }

  async getSXP(data: SXPData) {
    const response = await this.axiosInstance.post('/sxp/get', data);
    return response.data;
  }

  async listSXP(data: SXPListData) {
    const response = await this.axiosInstance.post('/sxp/list', data);
    return response.data;
  }

  async resumeSXP(data: SXPData) {
    const response = await this.axiosInstance.post('/sxp/resume', data);
    return response.data;
  }

  async setSXPPause(data: SXPPauseData) {
    const response = await this.axiosInstance.post('/sxp/setPause', data);
    return response.data;
  }

  async topupSXP(data: SXPTopupData) {
    const response = await this.axiosInstance.post('/sxp/topup', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER API =====
  async registerSXP(data: RegisterSXPData) {
    const response = await this.axiosInstance.post('/sxp/register', data);
    return response.data;
  }

  // ===== SYSTEMATIC ORDERS ENGINE SXP REGISTER CSV API =====
  async registerSXPCSV(data: SXPCSVData) {
    const response = await this.axiosInstance.post('/sxp/register/csv', data);
    return response.data;
  }

  // ===== UCC 2FA RESEND LINK API =====
  async resendUCC2FALink(data: UCC2FAResendData) {
    const response = await this.axiosInstance.post('/ucc/2faResendLink', data);
    return response.data;
  }

  // ===== UCC ADD UCC ADD UCC CSV API =====
  async runUCCCSV(data: UCCCSVData) {
    const response = await this.axiosInstance.post('/ucc/csvRunner', data);
    return response.data;
  }

  // ===== UCC DEACTIVATE UCC API =====
  async updateUCC(data: UpdateUCCData) {
    const response = await this.axiosInstance.post('/ucc/v2/updateUcc', data);
    return response.data;
  }

  // ===== UCC GET UCC API =====
  async getUCC(data: UCCData, contentType?: string) {
    const headers = contentType ? { 'Content-Type': contentType } : {};
    const response = await this.axiosInstance.post('/ucc/v2/getUcc', data, { headers });
    return response.data;
  }

  // ===== UCC LIST UCC API =====
  async listUCC(data: UCCListData) {
    const response = await this.axiosInstance.post('/ucc/v2/listUcc', data);
    return response.data;
  }

  // ===== UCC UPDATE UCC UPDATE HOLDING NATURE API =====
  async addUCC(data: AddUCCData) {
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
