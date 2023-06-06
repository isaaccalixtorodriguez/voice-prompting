import { TranscriberService } from '@src/services';

class TranscriberImplementer {
  trascriberService: TranscriberService;

  constructor(trascriberService: TranscriberService){
    this.trascriberService = trascriberService;
  }
  async transcribe(): Promise<string> {
    return await this.trascriberService.transcribe();
  }
}

export {
  TranscriberImplementer
};
