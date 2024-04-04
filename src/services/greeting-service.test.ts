import { test } from "node:test"
import assert from "node:assert"

import { GreetingService } from './greeting-service';

test('greet', () => {
  const greetingService = new GreetingService('?');

  assert.equal(greetingService.greet('John Doe'), 'Hello, John Doe?');
});
