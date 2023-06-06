import { AudioImplementer, TranscriberImplementer } from '@src/implementers';
import { CompletionImplementer } from '@src/implementers/completion.implementer';
import {
  AudioService,
  CompletionService,
  TranscriberService,
} from '@src/services';

const audioTranscriber = async () => {
  const audioService = new AudioService();
  const transcriberService = new TranscriberService();
  const completionService = new CompletionService();
  const audioImplementer = new AudioImplementer(audioService);
  const transcriberImplementer = new TranscriberImplementer(transcriberService);
  const completionImplementer = new CompletionImplementer(completionService);
  
  console.time();
  await audioImplementer.record();
  const message = await transcriberImplementer.transcribe();

  console.log(await completionImplementer.chat(message));

  console.timeEnd();
};

const chatCompletion = async () => {
  const completionService = new CompletionService();
  const completionImplementer = new CompletionImplementer(completionService);
  const stdin = process.openStdin();
  
  console.log('write a prompt:');
  stdin.addListener('data', async (data) => {
    console.time();
    console.log(await completionImplementer.chat(data.toString()));
    console.timeEnd();
    process.exit();
  });
};

export { 
  audioTranscriber,
  chatCompletion
};
