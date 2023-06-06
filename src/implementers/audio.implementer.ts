import { AudioService } from '@src/services';

class AudioImplementer {
  audioService: AudioService;

  constructor(
    audioService: AudioService
  ){
    this.audioService = audioService;
  }
  async record(): Promise<void>{
    await this.audioService.record();
  }
}

export {
  AudioImplementer
};