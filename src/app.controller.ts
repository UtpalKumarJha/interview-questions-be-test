import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/generate/jobDescriptionPrompt')
  async generateDescription(@Body() body: any) {
    console.log("Entered controller");
    console.log(body); // log the request body
    return this.appService.getJobDescriptionPrompt(body);
  }

  @Post('/generate/questionPrompt')
  async generateQuestions(@Body() body: any) {
    console.log("Entered generateQuestions");
    console.log(body); // log the request body
    return this.appService.getJobQuestions(body);
  }
}
