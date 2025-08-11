import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { MfaService } from '../services/mfa.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let mfaService: MfaService;

  const mockMfaService = {
    login: jest.fn(),
    get2FALink: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: MfaService,
          useValue: mockMfaService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    mfaService = module.get<MfaService>(MfaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should successfully login with valid credentials', async () => {
      const loginData = {
        userId: 'testuser',
        password: 'testpass',
        source: 'web',
        deviceId: 'device123',
        deviceType: 'desktop'
      };

      const expectedResponse = {
        success: true,
        message: 'Login successful',
        data: { token: 'mock-token' }
      };

      mockMfaService.login.mockResolvedValue(expectedResponse);

      const result = await controller.login(loginData);

      expect(mockMfaService.login).toHaveBeenCalledWith(loginData);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw HttpException when userId is missing', async () => {
      const loginData = {
        password: 'testpass',
        source: 'web'
      };

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'userId is required'
        }
      });
    });

    it('should throw HttpException when password is missing', async () => {
      const loginData = {
        userId: 'testuser',
        source: 'web'
      };

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'password is required'
        }
      });
    });

    it('should throw HttpException when source is invalid', async () => {
      const loginData = {
        userId: 'testuser',
        password: 'testpass',
        source: 'invalid-source'
      };

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'source must be one of: web, mobile, api'
        }
      });
    });

    it('should throw HttpException when deviceType is invalid', async () => {
      const loginData = {
        userId: 'testuser',
        password: 'testpass',
        deviceType: 'invalid-device'
      };

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'deviceType must be one of: android, ios, web, desktop'
        }
      });
    });

    it('should handle service errors and return appropriate HttpException', async () => {
      const loginData = {
        userId: 'testuser',
        password: 'testpass'
      };

      const serviceError = {
        response: {
          status: 401,
          data: { message: 'Invalid credentials' }
        }
      };

      mockMfaService.login.mockRejectedValue(serviceError);

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: 401,
        response: { message: 'Invalid credentials' }
      });
    });

    it('should handle generic errors and return 500 status', async () => {
      const loginData = {
        userId: 'testuser',
        password: 'testpass'
      };

      const genericError = new Error('Network error');
      mockMfaService.login.mockRejectedValue(genericError);

      await expect(controller.login(loginData)).rejects.toThrow(HttpException);
      await expect(controller.login(loginData)).rejects.toMatchObject({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        response: { error: 'Network error' }
      });
    });
  });

  describe('get2FALink', () => {
    it('should successfully get 2FA link with valid data', async () => {
      const linkData = {
        userId: 'testuser',
        source: 'web',
        deviceId: 'device123'
      };

      const expectedResponse = {
        success: true,
        message: '2FA link generated',
        data: { link: 'https://2fa.example.com/link' }
      };

      mockMfaService.get2FALink.mockResolvedValue(expectedResponse);

      const result = await controller.get2FALink(linkData);

      expect(mockMfaService.get2FALink).toHaveBeenCalledWith(linkData);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw HttpException when userId is missing for 2FA', async () => {
      const linkData = {
        source: 'web',
        deviceId: 'device123'
      };

      await expect(controller.get2FALink(linkData)).rejects.toThrow(HttpException);
      await expect(controller.get2FALink(linkData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'userId is required'
        }
      });
    });

    it('should throw HttpException when source is invalid for 2FA', async () => {
      const linkData = {
        userId: 'testuser',
        source: 'invalid-source'
      };

      await expect(controller.get2FALink(linkData)).rejects.toThrow(HttpException);
      await expect(controller.get2FALink(linkData)).rejects.toMatchObject({
        status: HttpStatus.BAD_REQUEST,
        response: {
          success: false,
          message: 'source must be one of: web, mobile, api'
        }
      });
    });
  });
}); 