import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import GreetingService from '../services/greeting-service';

const greetingService = new GreetingService('!');

module.exports.handle = async (event: APIGatewayProxyEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const result = {
    message: greetingService.greet(process.env.HELLO_WHO as string),
  };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(result),
  };
};
