# dev-template-backend

## Overview

This repository serves as a template for creating Node.js applications with a clean architecture, suitable for development, testing, and production environments. It provides a structured setup with a focus on maintainability, scalability, and best practices.

## Features

- **TypeScript**: Leverage TypeScript for static typing and improved developer experience.
- **Module Aliases**: Simplify imports with module aliases.
- **Linting**: Ensure code quality with ESLint.
- **Testing**: Write and run tests using Jest.
- **Live Reload**: Develop efficiently with live reload support by Nodemon.
- **Husky**: Manage Git hooks with Husky.
- **Concurrent Tasks**: Run multiple tasks concurrently with ease.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/AviMehta90/dev-template-backend.git
   cd dev-template-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Scripts

- **Build**: Compile TypeScript to JavaScript.

  ```sh
  npm run build
  ```

- **Build and Watch**: Compile TypeScript and watch for changes.

  ```sh
  npm run build:watch
  ```

- **Start**: Run the application.

  ```sh
  npm start
  ```

- **Development**: Run the application with live reload.

  ```sh
  npm run start:dev
  ```

- **Test**: Run tests with Jest.

  ```sh
  npm test
  ```

- **Test Watch**: Run tests and watch for changes.

  ```sh
  npm run test:watch
  ```

- **Test CI**: Run tests with coverage.

  ```sh
  npm run test:ci
  ```

- **Lint**: Lint the codebase with ESLint.

  ```sh
  npm run lint
  ```

- **Prepare**: Set up Git hooks with Husky.

  ```sh
  npm run prepare
  ```

## Project Structure

```sh
dist/                 # Compiled JavaScript files
src/                  # Source TypeScript files
  ├── config/         # Configuration files
  ├── controllers/    # Controller files
  ├── models/         # Data models
  ├── routes/         # Route handlers
  ├── services/       # Service layer
  ├── utils/          # Utility functions
  ├── middlewares/    # Middleware functions
tsconfig.json         # TypeScript configuration
tsconfig-build.json   # TypeScript build configuration
eslint.config.mjs     # ESLint configuration
jest.config.ts        # Jest configuration
package.json          # Project metadata and dependencies
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Make sure to follow the [commit message conventions](https://www.conventionalcommits.org/en/v1.0.0/).
6. Push to the branch (`git push origin feature/your-feature`).
7. Open a pull request.

## License

This project is licensed under the Apache License.

## Author

[Avi Mehta](https://github.com/AviMehta90)

---
