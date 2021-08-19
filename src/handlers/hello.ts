import {
  APIGatewayProxyEvent,
  Callback,
  Context,
} from 'aws-lambda';

module.exports.handle = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const result = {
    message: `hello ${process.env.HELLO_WHO}!`,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
};
