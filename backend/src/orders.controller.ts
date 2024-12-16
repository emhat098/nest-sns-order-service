import { Controller, Post, Body, Get } from '@nestjs/common';
import { SnsService } from './sns.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly snsService: SnsService) {}

  @Get('/')
  getOrder(): string {
    return 'Order getted';
  }

  @Post('create')
  async createOrder(@Body() body: { userId: string }) {
    const orderId = Math.random().toString(36).substr(2, 9); // Generate a mock order ID
    const { userId } = body;

    // Publish message to SNS
    await this.snsService.publishNewOrder(orderId, userId);

    return {
      success: true,
      orderId,
      message: 'Order created and message published!',
    };
  }
}
