import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller('ucc')
export class UCCController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('resend2fa')
  async resendUCC2FALink(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.uccId) {
        throw new HttpException({
          success: false,
          message: 'uccId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.resendUCC2FALink(body);
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

  @Post('csv')
  async runUCCCSV(@Body() body: any) {
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

      const data = await this.mfaService.runUCCCSV(body);
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

  @Post('update')
  async updateUCC(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.uccId) {
        throw new HttpException({
          success: false,
          message: 'uccId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.updateUCC(body);
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
  async getUCC(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getUCC(body);
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
  async listUCC(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.listUCC(body);
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

  @Post('add')
  async addUCC(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.folioNumber) {
        throw new HttpException({
          success: false,
          message: 'folioNumber is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.schemeCode) {
        throw new HttpException({
          success: false,
          message: 'schemeCode is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.holdingNature) {
        throw new HttpException({
          success: false,
          message: 'holdingNature is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.addUCC(body);
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