# typescript-serverless-template

Template for TypeScript serverless applications.

Deploys an [AWS Lambda application](https://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html) by utilizing [Serverless Framework](https://www.serverless.com). Env file (i.e., `.env`) is used for configuration.

Since this tries to follow the [3 Musketeers](https://3musketeersdev.netlify.app) methodology, the following are heavily used:

- Docker
- Docker Compose
- Make

## Usage

#### configure

```bash
$ make .env
```

- see generated `.env` file for configuration

**Note:** For deployment via CI/CD, `CICD_MODE` environment variable should be set to `true` in the build server. All configuration should also be set in the build server's environment variables. They will automatically be used if `.env` is generated from `.env.cicd`.

#### install dependencies (generate `node_modules`)

```bash
$ make deps
```

#### run linter (autofix)

```bash
$ make lint
```

#### run tests

```bash
$ make test
```

#### deploy serverless application

```bash
$ make deploy
```
