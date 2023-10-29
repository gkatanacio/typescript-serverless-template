# typescript-serverless-template

Template for typescript serverless applications.

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
