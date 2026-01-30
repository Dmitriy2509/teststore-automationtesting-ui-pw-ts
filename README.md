# Playwright E2E Testing Framework

This repository contains an end-to-end (E2E) testing framework built with [Playwright](https://playwright.dev/). It is designed to automate and validate the functionality of a web application.

## Project Structure

### Key Directories

- **data/**: Contains test data files such as `ConfirmOrderData.ts`, `SearchData.ts`, etc.
- **fixtures/**: Includes custom fixtures to set up and tear down test environments.
- **pages/**: Implements the Page Object Model (POM) for modular and reusable test code.
- **tests/**: Contains the test cases written using Playwright.

## Prerequisites

- Node.js (>=20.x)
- npm
- Playwright

## Installation

1. Clone the repository:Continuous Integration
   The workflows directory contains CI/CD workflows to automate test execution

    git clone https://github.com/Dmitriy2509/teststore-automationtesting-ui-pw-ts

    cd https://github.com/Dmitriy2509/teststore-automationtesting-ui-pw-ts

2. Install dependencies:
   npm install
3. Set up environment variables: Create a .env file in the root directory and define the required variables:

   EMAIL=testEmail

   PASSWORD=testPassword

## Running Tests

### Run All Tests

npm run test

## Continuous Integration

The workflows directory contains CI/CD workflows to automate test execution.

## License

This project is licensed under the MIT License.
