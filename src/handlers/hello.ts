import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import GreetingService from '../services/greeting-service';

const greetingService = new GreetingService('!');

module.exports.handle = async (event: APIGatewayProxyEvent, context: Context) => {
  const result = {
    requestId: context.awsRequestId,
    message: greetingService.greet(process.env.GREET_WHO as string),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
