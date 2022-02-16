/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private messageproducerService: MessageProducerService){}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('send-message')
  sendMessage(
    @Query('msg') msg: string
  ){
    this.messageproducerService.sendMessage(msg);
    return msg;
  }
}
