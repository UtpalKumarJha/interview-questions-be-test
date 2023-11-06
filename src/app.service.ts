import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJobDescriptionPrompt(body) {
    const { prompt } = body;
    console.log("Entered service prompt getJobDescriptionPrompt", body);
    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "user", "content": prompt }
      ],
      model: "gpt-4",
    });
    console.log("Entered service 2 getJobDescriptionPrompt ", completion);
    const responseMessages = completion.choices.map(choice => choice.message.content);
    console.log("Entered service 3 getJobDescriptionPrompt", responseMessages);
    return responseMessages;
  }

  async getJobQuestions(body) {
    const { prompt } = body;
    console.log("Entered service prompt getJobQuestions", body);
    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "user", "content": prompt }
      ],
      model: "gpt-4",
    });
    console.log("Entered service 2 getJobQuestions", completion);
    const responseMessages = completion.choices.map(choice => choice.message.content);
    console.log("Entered service 3 getJobQuestions", responseMessages);
    return responseMessages;
  }
}
