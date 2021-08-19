export default class GreetingService {
  punctuation: string;

  constructor(punctuation: string) {
    this.punctuation = punctuation;
  }

  greet(name: string): string {
    return `hello ${name}${this.punctuation}`;
  }
}
