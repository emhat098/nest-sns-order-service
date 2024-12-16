import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { SnsService } from './sns.service';

@Module({
  controllers: [OrdersController], // Register the OrdersController
  providers: [SnsService], // Register the SnsService
})
export class OrdersModule {}
