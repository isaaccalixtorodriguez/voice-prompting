import * as fs from 'fs';
import * as ffmpegPath from '@ffmpeg-installer/ffmpeg';
import * as ffmpeg from 'fluent-ffmpeg';
import * as mic from 'mic';
import { Readable } from 'stream';

import { Audio } from '@src/interfaces';
import { appConfig } from '@src/config/app.config';

class AudioService implements Audio {
  async record(): Promise<void> {
    ffmpeg.setFfmpegPath(ffmpegPath.path);

    return new Promise<void>((resolve, reject) => {
      const micInstance = mic({
        rate: '16000',
        channels: '1',
        fileType: appConfig.FORMAT_RECORD,
      });
  
      const micInputStream = micInstance.getAudioStream();
      const output = fs.createWriteStream(appConfig.PATH_RECORD);
      const writable = new Readable().wrap(micInputStream);
  
      console.log('Recording... Press Ctrl+C to stop.');
  
      writable.pipe(output);
  
      micInstance.start();
  
      process.on('SIGINT', () => {
        micInstance.stop();
        console.log('Finished recording');
        resolve();
      });
  
      micInputStream.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export {
  AudioService
};
