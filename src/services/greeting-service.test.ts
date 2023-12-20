import { GreetingService } from './greeting-service';

test('greet', () => {
  const greetingService = new GreetingService('?');

  expect(greetingService.greet('john doe')).toBe('hello john doe?');
});
