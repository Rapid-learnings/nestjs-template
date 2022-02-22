<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript TypeORM starter repository.

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/rakeshdr1/nestjs-template

# 2. Enter your newly-cloned folder.
cd nestjs-template

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn

# 4. Run development server and open http://localhost:3000
yarn start:dev

```

# Starting Docker container

```bash
# Run below command inside nestjs-template folder in terminal
docker-compose up

```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

# Swagger documentation

open http://localhost:3000/documentation

# Envioroment variables example

```

PORT=3000
JWT_SECRET_KEY=rxPhglGJWPlOW596
JWT_EXPIRATION_TIME=3600
```

# Postgres envioroment variables

```

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=demo
```

# Sentry

```

SENTRY_DSN='sentry-dsn'
```

## Features

<dl>
  <dt><b>Quick scaffolding</b></dt>
  <dd>Create modules, services, controller - right from the CLI!</dd>

  <dt><b>Instant feedback</b></dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes are reflected instantaneously.</dd>

  <dt><b>JWT Authentication</b></dt>
  <dd>Installed and configured JWT authentication.</dd>

  <dt><b>Next generation Typescript</b></dt>
  <dd>Always up to date typescript version.</dd>

  <dt><b>Industry-standard routing</b></dt>
  <dd>It's natural to want to add pages (e.g. /about`) to your application, and routing makes this possible.</dd>

  <dt><b>Environment Configuration</b></dt>
  <dd>development, staging and production environment configurations</dd>

  <dt><b>Swagger Api Documentation</b></dt>
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd>

  <dt><b>Linter</b></dt>  
  <dd>tslint + eslint + prettier = ❤️</dd>
</dl>

## License

Nest is [MIT licensed](LICENSE).
