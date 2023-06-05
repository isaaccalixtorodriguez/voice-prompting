import { cleanEnv, str } from 'envalid';
import * as dotenv from 'dotenv';
dotenv.config();

export const appConfig = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'], default: 'development' }),
  EXAMPLE: str({ default: '' })
});
