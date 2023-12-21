import { GreetingService } from './greeting-service';

test('greet', () => {
  const greetingService = new GreetingService('?');

  expect(greetingService.greet('John Doe')).toBe('Hello, John Doe?');
});
