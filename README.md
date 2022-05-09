<h1 align="center">
  NestJS Monolithic template
</h1>

![Project Logo](./assets/Rapid%20Logo.jpeg)

# About The App

[Nest](https://github.com/nestjs/nest) framework TypeScript TypeORM Postgres Monolithic starter repository.

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
  <dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/api/documentation</dd>

  <dt><b>Linter</b></dt>  
  <dd>tslint + eslint + prettier = ❤️</dd>
</dl>

---

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/Rapid-learnings/nestjs-template

# 2. Enter your newly-cloned folder.
cd nestjs-template

# 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)
yarn install

# 4. Run development server and open http://localhost:3000
yarn start:dev

```

## Starting Docker container

```bash
# Run below command inside nestjs-template folder in terminal
docker-compose up

```

---

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

---

## Swagger documentation

After running the app, navigate to the path [http://localhost:3000/api/documentation](http://localhost:3000/api/documentation) to view swagger UI

## Add Envioroment variables

Please refer [.env.example](./.example.env) for the env variables that is needed

---

## Database Migrations

Generate migration from database
`yarn migration:generate initialMigration`

Run migrations
`yarn migration:run`

---

## License

Nest is [MIT licensed](LICENSE).
