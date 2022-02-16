/* eslint-disable prettier/prettier */
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";


// this decorator is from bull
// specify name of the queue  
@Processor('message-queue')
export class MessageConsumer{
    // ever consumer must have it handler method
    //this get automatically triggered when application is running

    // to triggered this it should link with name of the job
    // take this from producer
    @Process('message-job')
    messageJob(job: Job<unknown>){
        console.log(job.data);
    }
    
}