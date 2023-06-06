export interface Completion {
  chat(message: string): Promise<string>;
}
