import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller('mandate')
export class MandateController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('link')
  async linkMandate(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.mandateId) {
        throw new HttpException({
          success: false,
          message: 'mandateId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      // Validate optional fields
      const {
        userId,
        mandateId,
        source
      } = body;

      // Validate source if provided
      if (source && !['web', 'mobile', 'api'].includes(source)) {
        throw new HttpException({
          success: false,
          message: 'source must be one of: web, mobile, api'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.linkMandate(body);
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

  @Post('cancel')
  async cancelMandate(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.mandateId) {
        throw new HttpException({
          success: false,
          message: 'mandateId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      // Validate optional fields
      const {
        userId,
        mandateId,
        reason,
        source
      } = body;

      // Validate source if provided
      if (source && !['web', 'mobile', 'api'].includes(source)) {
        throw new HttpException({
          success: false,
          message: 'source must be one of: web, mobile, api'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.cancelMandate(body);
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

  @Post('delink')
  async delinkMandate(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.mandateId) {
        throw new HttpException({
          success: false,
          message: 'mandateId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.delinkMandate(body);
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
  async getMandate(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getMandate(body);
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
  async listMandates(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.listMandates(body);
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
  async updateMandate(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.mandateId) {
        throw new HttpException({
          success: false,
          message: 'mandateId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.updateMandate(body);
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
  async registerMandate(@Body() body: any) {
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

      const data = await this.mfaService.registerMandate(body);
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
  async registerMandateCSV(@Body() body: any) {
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

      const data = await this.mfaService.registerMandateCSV(body);
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