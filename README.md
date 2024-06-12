# Nest.JS Microservices

This is a RESTful API built using Nest.js, a framework for building efficient, scalable Node.js server-side applications. This application also utilizes Docker for containerization, NVM for managing Node.js versions, and Swagger for API documentation and testing.

## Prerequisites

-   Node.js version 20.x.x (LTS)
-   Postgres
-   Docker
-   Docker Compose
-   NVM (optional, for managing Node.js versions)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Swagger](#swagger)
-   [Docker](#docker)
-   [Testing](#testing)
-   [Linting and Formatting](#linting-and-formatting)
-   [Contributing](#contributing)

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed, and consider using [NVM](https://github.com/nvm-sh/nvm) to manage your Node.js versions. The project uses Node.js version specified in `.nvmrc`.

1. Clone this repository:

```bash
git clone https://github.com/pashamakhilkumarreddy/nestjs-microservices.git
```

2. Change to the project directory:

```bash
cd nestjs-microservices
```

3. If using NVM, run the following command to ensure the correct Node.js version is used:

```bash
nvm use
```

4. Create a .env file in the project root directory and add the required environment variables (see .env.example as a reference).

```bash
cp .env.example .env
```

5. Install dependencies using npm:

```bash
npm install
```

## Usage

Start the application:

```bash
npm run start
```

```bash
npm run start:auth
```

```bash
npm run start:payments
```

## Swagger

Access Swagger UI at [Swagger API Docs](http://localhost:5000/api-docs)

## Docker

This project includes Docker Compose files for production, development, and QA environments. Before using Docker, make sure you have the required environment variables set in the corresponding .env files (see .env.example as a reference).

#### Running Docker Containers

To run Docker containers use the following commands:

```bash
npm run docker:start
```

#### Stopping and Cleaning Docker Containers

To stop and clean Docker containers, use the following commands:

```bash
npm run docker:stop
npm run docker:clean
```

## Testing

1. Run Tests

```bash
npm test
```

2. Watch Tests

```bash
npm run test:watch
```

3. Test Coverage

```bash
npm run test:coverage
```

4. Debug Tests

```bash
npm run test:debug
```

5. End-to-End Tests

```bash
npm run test:e2e
```

## Linting and Formatting

1. Run ESLint

```bash
npm run lint
```

2. Fix ESLint Issues

```bash
npm run lint:fix
```

3. Format Code

```bash
npm run format:fix
```

#### Pre-commit Hook

Linting and formatting are enforced through the pre-commit hook using Husky and lint-staged. Make sure to address any issues reported by the hook. If you want to temporarily disable pre-commit hooks, you can use the `--no-verify` or `-n` option with your Git commit command. This option skips the pre-commit and commit-msg hooks for that specific commit.

```bash
git commit --no-verify -m "Your commit message"
```

## Contributing

[See the guide in Contributing.](./CONTRIBUTING.md)
