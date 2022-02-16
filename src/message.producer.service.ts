/* eslint-disable prettier/prettier */
// this producer is used to pushed job in queue
import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";



@Injectable()
export class MessageProducerService{
    // need to inject queue in constructor

    constructor(@InjectQueue('message-queue') private queue: Queue){}

    async sendMessage(msg:string){
        //push data in cache
        // first one job name
        // second payload
        await this.queue.add('message-job',{
            text:msg
        },{delay: 10000});
    }
    // this is 10sec delay
    // call this producer from controller

}