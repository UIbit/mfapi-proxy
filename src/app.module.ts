import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './controllers/auth.controller';
import { MandateController } from './controllers/mandate.controller';
import { MasterDataController } from './controllers/master-data.controller';
import { OrderController } from './controllers/order.controller';
import { PaymentController } from './controllers/payment.controller';
import { SXPController } from './controllers/sxp.controller';
import { UCCController } from './controllers/ucc.controller';
import { MfaService } from './services/mfa.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AuthController,
    MandateController,
    MasterDataController,
    OrderController,
    PaymentController,
    SXPController,
    UCCController,
  ],
  providers: [MfaService],
})
export class AppModule {} 