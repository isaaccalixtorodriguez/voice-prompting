export interface Transcriber {
  transcribe(): Promise<string>;
}
