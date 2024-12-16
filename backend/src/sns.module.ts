import { Module } from '@nestjs/common';
import { SnsService } from './sns.service';
import { SnsController } from './sns.controller';
import { EventsGateway } from './events.gateway';

@Module({
  controllers: [SnsController],
  providers: [SnsService, EventsGateway],
})
export class SnsModule {}
