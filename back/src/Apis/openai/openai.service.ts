import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';


@Injectable()
export class OpenaiService {
    private readonly openai = new OpenAI({
        apiKey : process.env.OPENAI_API_KEY,
    });
    async createCompletion(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model : "o3-mini",
            messages: [
                {role:'system', content:'Hello, how are you?'},
                {role: 'user', content:prompt}

            ]
        });
        
        return response.choices[0].message.content ?? 'Default fallback content';
    }

}
