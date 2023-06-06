import * as fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

import { appConfig } from '@src/config/app.config';
import { Transcriber } from '@src/interfaces';

class TranscriberService implements Transcriber {
  private configuration = new Configuration({
    apiKey: appConfig.OPENAI_API_KEY
  });
  private openai = new OpenAIApi(this.configuration);

  async transcribe(): Promise<string> {
    try {
      const transcript = await this.openai.createTranscription(
        fs.createReadStream(appConfig.PATH_RECORD) as any,
        'whisper-1'
      );

      return transcript.data.text;
    } catch (error) {
      console.error({error});
    }
  }
}

export {
  TranscriberService
};
