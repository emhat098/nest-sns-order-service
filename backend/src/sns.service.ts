import { Injectable } from '@nestjs/common';
import { SNS } from './aws.config';

@Injectable()
export class SnsService {
  private readonly topicArn = process.env.SNS_TOPIC_ARN;

  async publishNewOrder(orderId: string, userId: string): Promise<void> {
    try {
      const message = {
        orderId,
        userId,
        timestamp: new Date().toISOString(),
      };

      const params = {
        Message: JSON.stringify(message),
        TopicArn: this.topicArn,
        Subject: 'New Order Notification',
      };

      const result = await SNS.publish(params).promise();
      console.log('Message published to SNS:', result);
    } catch (error) {
      console.error('Error publishing to SNS:', error);
      throw error;
    }
  }
}
