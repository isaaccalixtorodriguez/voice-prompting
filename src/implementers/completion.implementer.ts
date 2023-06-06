import { CompletionService } from '@src/services';

class CompletionImplementer {
  completionService: CompletionService;

  constructor(completionService: CompletionService){
    this.completionService = completionService;
  }
  async chat(message: string): Promise<string> {
    return await this.completionService.chat(message);
  }
}

export {
  CompletionImplementer
};
