import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MfaService } from '../services/mfa.service';

@Controller()
export class AuthController {
  constructor(private readonly mfaService: MfaService) {}

  @Post('login')
  async login(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      if (!body.password) {
        throw new HttpException({
          success: false,
          message: 'password is required'
        }, HttpStatus.BAD_REQUEST);
      }

      // Validate optional fields
      const {
        userId,
        password,
        source,
        deviceId,
        deviceType
      } = body;

      // Validate source if provided
      if (source && !['web', 'mobile', 'api'].includes(source)) {
        throw new HttpException({
          success: false,
          message: 'source must be one of: web, mobile, api'
        }, HttpStatus.BAD_REQUEST);
      }

      // Validate deviceType if provided
      if (deviceType && !['android', 'ios', 'web', 'desktop'].includes(deviceType)) {
        throw new HttpException({
          success: false,
          message: 'deviceType must be one of: android, ios, web, desktop'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.login(body);
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

  @Post('v2/get2faLink')
  async get2FALink(@Body() body: any) {
    try {
      // Validate required fields
      if (!body.userId) {
        throw new HttpException({
          success: false,
          message: 'userId is required'
        }, HttpStatus.BAD_REQUEST);
      }

      // Validate optional fields
      const {
        userId,
        source,
        deviceId
      } = body;

      // Validate source if provided
      if (source && !['web', 'mobile', 'api'].includes(source)) {
        throw new HttpException({
          success: false,
          message: 'source must be one of: web, mobile, api'
        }, HttpStatus.BAD_REQUEST);
      }

      const data = await this.mfaService.get2FALink(body);
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