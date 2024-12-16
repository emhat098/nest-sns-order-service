import { Controller, Post, Body } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Controller('sns')
export class SnsController {
  constructor(private readonly eventsGateway: EventsGateway) {}

  @Post('webhook')
  async handleSnsMessage(@Body() body: any): Promise<{ status: string }> {
    console.log('Received SNS message:', body);

    const { Type, Message, SubscribeURL } = body;

    if (Type === 'SubscriptionConfirmation') {
      console.log('Subscription confirmation requested:', SubscribeURL);
    } else if (Type === 'Notification') {
      const parsedMessage = JSON.parse(Message);
      this.eventsGateway.broadcastNewOrder(parsedMessage);
    }

    return { status: 'Message processed' };
  }
}
