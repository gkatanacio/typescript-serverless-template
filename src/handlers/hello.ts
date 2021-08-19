import {
  APIGatewayProxyEvent,
  Callback,
  Context,
} from 'aws-lambda';

import GreetingService from '../services/greeting-service';

const greetingService = new GreetingService('!');

module.exports.handle = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const result = {
    message: greetingService.greet(process.env.HELLO_WHO as string),
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
};
