import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller('sxp')
export class SXPController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('cancel')
  async cancelSXP(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.cancelSXP(body);
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

  @Post('history')
  async getSXPHistory(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.sxpId) {
        throw new HttpException({
          success: false,
          message: 'sxpId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getSXPHistory(body);
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

  @Post('get')
  async getSXP(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getSXP(body);
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
  async listSXP(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.listSXP(body);
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

  @Post('resume')
  async resumeSXP(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.resumeSXP(body);
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

  @Post('pause')
  async setSXPPause(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.sxpId) {
        throw new HttpException({
          success: false,
          message: 'sxpId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.setSXPPause(body);
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

  @Post('topup')
  async topupSXP(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.sxpId) {
        throw new HttpException({
          success: false,
          message: 'sxpId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.topupAmount) {
        throw new HttpException({
          success: false,
          message: 'topupAmount is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.topupSXP(body);
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

  @Post('register')
  async registerSXP(@Body() body: any) {
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

      if (!body.folioNumber) {
        throw new HttpException({
          success: false,
          message: 'folioNumber is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.amount) {
        throw new HttpException({
          success: false,
          message: 'amount is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.frequency) {
        throw new HttpException({
          success: false,
          message: 'frequency is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.startDate) {
        throw new HttpException({
          success: false,
          message: 'startDate is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.registerSXP(body);
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

  @Post('register/csv')
  async registerSXPCSV(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.csvFile) {
        throw new HttpException({
          success: false,
          message: 'csvFile is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.registerSXPCSV(body);
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