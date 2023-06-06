import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@src', __dirname);
import { audioTranscriber, chatCompletion } from './handler/handler';

chatCompletion();
//audioTranscriber();