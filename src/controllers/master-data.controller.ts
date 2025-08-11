import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller('master')
export class MasterDataController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('scheme/list')
  async getMasterSchemeList(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getMasterSchemeList(body);
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

  @Post('nav/list')
  async getNAVMasterList(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.getNAVMasterList(body);
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