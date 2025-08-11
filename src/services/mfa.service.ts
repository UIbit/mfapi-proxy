import { Injectable } from '@nestjs/common';
import { Mfapiclient } from '../index';

@Injectable()
export class MfaService {
  private mfaClient: Mfapiclient;

  constructor() {
    this.mfaClient = new Mfapiclient();
  }

  // Authentication methods
  async login(credentials: any) {
    return await this.mfaClient.login(credentials);
  }

  async get2FALink(data: any) {
    return await this.mfaClient.get2FALink(data);
  }

  // Mandate methods
  async linkMandate(data: any) {
    return await this.mfaClient.linkMandate(data);
  }

  async cancelMandate(data: any) {
    return await this.mfaClient.cancelMandate(data);
  }

  async delinkMandate(data: any) {
    return await this.mfaClient.delinkMandate(data);
  }

  async getMandate(data: any) {
    return await this.mfaClient.getMandate(data);
  }

  async listMandates(data: any) {
    return await this.mfaClient.listMandates(data);
  }

  async updateMandate(data: any) {
    return await this.mfaClient.updateMandate(data);
  }

  async registerMandate(data: any) {
    return await this.mfaClient.registerMandate(data);
  }

  async registerMandateCSV(data: any) {
    return await this.mfaClient.registerMandateCSV(data);
  }

  // Master data methods
  async getMasterSchemeList(data: any) {
    return await this.mfaClient.getMasterSchemeList(data);
  }

  async getNAVMasterList(data: any) {
    return await this.mfaClient.getNAVMasterList(data);
  }

  // NFT methods
  async changeNFTBankAccount(data: any) {
    return await this.mfaClient.changeNFTBankAccount(data);
  }

  async changeNFTContact(data: any) {
    return await this.mfaClient.changeNFTContact(data);
  }

  async changeNFTNominee(data: any) {
    return await this.mfaClient.changeNFTNominee(data);
  }

  // Order methods
  async cancelOrder(data: any) {
    return await this.mfaClient.cancelOrder(data);
  }

  async getOrder(data: any) {
    return await this.mfaClient.getOrder(data);
  }

  async listOrders(data: any) {
    return await this.mfaClient.listOrders(data);
  }

  async createNewOrder(data: any) {
    return await this.mfaClient.createNewOrder(data);
  }

  async updateOrder(data: any) {
    return await this.mfaClient.updateOrder(data);
  }

  // Payment methods
  async getPaymentDetail(data: any) {
    return await this.mfaClient.getPaymentDetail(data);
  }

  async listPaymentDetails(data: any) {
    return await this.mfaClient.listPaymentDetails(data);
  }

  async getExchangePGService(data: any) {
    return await this.mfaClient.getExchangePGService(data);
  }

  async sendPaymentInfo(data: any) {
    return await this.mfaClient.sendPaymentInfo(data);
  }

  async processPaymentAggregator(data: any) {
    return await this.mfaClient.processPaymentAggregator(data);
  }

  async requestSinglePaymentBSEPG(data: any) {
    return await this.mfaClient.requestSinglePaymentBSEPG(data);
  }

  async sendPaymentInfoBSEPG(data: any) {
    return await this.mfaClient.sendPaymentInfoBSEPG(data);
  }

  // MIS methods
  async getMISDetail(data: any) {
    return await this.mfaClient.getMISDetail(data);
  }

  async uploadMIS(data: any) {
    return await this.mfaClient.uploadMIS(data);
  }

  // SXP methods
  async cancelSXP(data: any) {
    return await this.mfaClient.cancelSXP(data);
  }

  async getSXPHistory(data: any) {
    return await this.mfaClient.getSXPHistory(data);
  }

  async getSXP(data: any) {
    return await this.mfaClient.getSXP(data);
  }

  async listSXP(data: any) {
    return await this.mfaClient.listSXP(data);
  }

  async resumeSXP(data: any) {
    return await this.mfaClient.resumeSXP(data);
  }

  async setSXPPause(data: any) {
    return await this.mfaClient.setSXPPause(data);
  }

  async topupSXP(data: any) {
    return await this.mfaClient.topupSXP(data);
  }

  async registerSXP(data: any) {
    return await this.mfaClient.registerSXP(data);
  }

  async registerSXPCSV(data: any) {
    return await this.mfaClient.registerSXPCSV(data);
  }

  // UCC methods
  async resendUCC2FALink(data: any) {
    return await this.mfaClient.resendUCC2FALink(data);
  }

  async runUCCCSV(data: any) {
    return await this.mfaClient.runUCCCSV(data);
  }

  async updateUCC(data: any) {
    return await this.mfaClient.updateUCC(data);
  }

  async getUCC(data: any, contentType?: string) {
    return await this.mfaClient.getUCC(data, contentType);
  }

  async listUCC(data: any) {
    return await this.mfaClient.listUCC(data);
  }

  async addUCC(data: any) {
    return await this.mfaClient.addUCC(data);
  }

  async getUserDetails(params: any) {
    return await this.mfaClient.getUserDetails(params);
  }
} 