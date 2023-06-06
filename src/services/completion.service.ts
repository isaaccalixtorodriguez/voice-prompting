import { Configuration, OpenAIApi } from 'openai';

import { appConfig } from '@src/config/app.config';
import { Completion } from '@src/interfaces';

class CompletionService implements Completion {
  private configuration = new Configuration({
    apiKey: appConfig.OPENAI_API_KEY
  });
  private openai = new OpenAIApi(this.configuration);

  async chat(message: string): Promise<string> {
    try {
      const completion = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      });

      return completion.data.choices[0].message.content;
    } catch (error) {
      console.error({error});
    }
  }
}

export {
  CompletionService
};
