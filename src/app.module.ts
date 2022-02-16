/* eslint-disable prettier/prettier */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message.consumer';
import { MessageProducerService } from './message.producer.service';

@Module({
  imports: [
    BullModule.forRoot({
      // config redis cache
      // eslint-disable-next-line prettier/prettier
      redis:{
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      // all queu must register like this
      name: 'message-queue',
    },
    // add new name here
    ),
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer],
})
export class AppModule {}
