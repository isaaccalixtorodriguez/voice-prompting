import { cleanEnv, str } from 'envalid';
import * as dotenv from 'dotenv';
dotenv.config();

export const appConfig = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'], default: 'development' }),
  FORMAT_RECORD: str({ default: 'mp3' }),
  PATH_RECORD: str({ default: './data/record.mp3' }),
  OPENAI_API_KEY: str({ default: '' })
});
