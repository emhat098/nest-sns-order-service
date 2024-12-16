import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SnsModule } from './sns.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env variables
    SnsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}