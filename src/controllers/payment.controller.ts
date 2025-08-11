import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('detail')
  async getPaymentDetail(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.orderId) {
        throw new HttpException({
          success: false,
          message: 'orderId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getPaymentDetail(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('list')
  async listPaymentDetails(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.listPaymentDetails(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('exchange/pg')
  async getExchangePGService(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.schemeCode) {
        throw new HttpException({
          success: false,
          message: 'schemeCode is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.amount) {
        throw new HttpException({
          success: false,
          message: 'amount is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getExchangePGService(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('info')
  async sendPaymentInfo(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.orderId) {
        throw new HttpException({
          success: false,
          message: 'orderId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentMethod) {
        throw new HttpException({
          success: false,
          message: 'paymentMethod is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentDetails) {
        throw new HttpException({
          success: false,
          message: 'paymentDetails is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.sendPaymentInfo(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('aggregator')
  async processPaymentAggregator(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.schemeCode) {
        throw new HttpException({
          success: false,
          message: 'schemeCode is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.amount) {
        throw new HttpException({
          success: false,
          message: 'amount is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentMethod) {
        throw new HttpException({
          success: false,
          message: 'paymentMethod is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.aggregatorType) {
        throw new HttpException({
          success: false,
          message: 'aggregatorType is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.processPaymentAggregator(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('bsepg/request')
  async requestSinglePaymentBSEPG(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.orderId) {
        throw new HttpException({
          success: false,
          message: 'orderId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.amount) {
        throw new HttpException({
          success: false,
          message: 'amount is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentMethod) {
        throw new HttpException({
          success: false,
          message: 'paymentMethod is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentDetails) {
        throw new HttpException({
          success: false,
          message: 'paymentDetails is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.requestSinglePaymentBSEPG(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Post('bsepg/info')
  async sendPaymentInfoBSEPG(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.orderId) {
        throw new HttpException({
          success: false,
          message: 'orderId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentStatus) {
        throw new HttpException({
          success: false,
          message: 'paymentStatus is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.paymentDetails) {
        throw new HttpException({
          success: false,
          message: 'paymentDetails is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.sendPaymentInfoBSEPG(body);
      return data;
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status || HttpStatus.INTERNAL_SERVER_ERROR);
      } else {
        throw new HttpException({ error: error.message }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
} 