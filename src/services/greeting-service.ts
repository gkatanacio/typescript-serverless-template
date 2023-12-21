export class GreetingService {
  punctuation: string;

  constructor(punctuation: string) {
    this.punctuation = punctuation;
  }

  greet(name: string): string {
    return `Hello, ${name}${this.punctuation}`;
  }
}
