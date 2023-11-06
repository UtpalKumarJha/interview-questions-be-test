import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJobDescriptionPrompt() {
    console.log("Entered service");
    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "user", "content": "React job 3 years" }
      ],
      model: "gpt-3.5-turbo",
    });
    console.log("Entered service 2", completion);
    const responseMessages = completion.choices.map(choice => choice.message.content);
    console.log("Entered service 3", responseMessages);
    return responseMessages;
  }
}
