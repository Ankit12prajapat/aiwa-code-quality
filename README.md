# Aiwa Code Quality 🚀

Welcome to the **Aiwa Code Quality** repository! This project contains the coding rules and GitHub actions for Ai West Africa (AiWA). Here, you will find guidelines and tools to ensure high-quality code across all our projects. 

[![Latest Release](https://img.shields.io/github/v/release/Ankit12prajapat/aiwa-code-quality)](https://github.com/Ankit12prajapat/aiwa-code-quality/releases)

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Coding Standards](#coding-standards)
   - [JavaScript](#javascript)
   - [PHP](#php)
   - [HTML](#html)
4. [GitHub Actions](#github-actions)
5. [Installation](#installation)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Introduction

In the fast-paced world of software development, maintaining high code quality is crucial. This repository serves as a central hub for coding standards and automated processes that help ensure our code remains clean, efficient, and maintainable. 

The AiWA coding rules cover various languages and frameworks, including JavaScript, PHP, and HTML. We also implement GitHub actions to automate testing and linting, making the development process smoother and more reliable.

## Getting Started

To get started with the AiWA coding standards, clone this repository to your local machine. Use the following command:

```bash
git clone https://github.com/Ankit12prajapat/aiwa-code-quality.git
```

Once cloned, navigate into the directory:

```bash
cd aiwa-code-quality
```

Next, check the [Releases](https://github.com/Ankit12prajapat/aiwa-code-quality/releases) section for the latest version. Download and execute the necessary files to set up the environment according to the coding standards.

## Coding Standards

### JavaScript

For JavaScript, we use ESLint to maintain code quality. ESLint helps identify problematic patterns and code that doesn’t adhere to our defined standards. 

#### ESLint Configuration

To set up ESLint, create a `.eslintrc.json` file in the root of your project with the following configuration:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "no-console": "warn",
    "indent": ["error", 2],
    "quotes": ["error", "single"]
  }
}
```

### PHP

For PHP, we adhere to the PSR-12 coding standard. This ensures that our PHP code is readable and consistent.

#### PHP Code Sniffer

To enforce PSR-12, use PHP Code Sniffer. Install it via Composer:

```bash
composer require --dev squizlabs/php_codesniffer
```

Then, create a configuration file named `phpcs.xml`:

```xml
<?xml version="1.0"?>
<ruleset name="MyProject">
    <description>My project coding standards</description>
    <rule ref="PSR12"/>
</ruleset>
```

### HTML

For HTML, we utilize HTMLHint to catch common errors and enforce best practices.

#### HTMLHint Configuration

Create a `.htmlhintrc` file in your project directory:

```json
{
  "attr-lowercase": true,
  "tag-pair": true,
  "tagname-lowercase": true,
  "doctype-html5": true
}
```

## GitHub Actions

GitHub Actions allow us to automate workflows. In this repository, we set up actions for linting and testing. 

### Sample Workflow

Create a `.github/workflows/lint.yml` file to automate linting:

```yaml
name: Lint Code

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint
```

This workflow triggers on every push or pull request, ensuring that code is linted before merging.

## Installation

To install the necessary tools and dependencies, follow these steps:

1. Ensure you have Node.js and Composer installed on your machine.
2. Run the following commands to install JavaScript dependencies:

```bash
npm install
```

3. For PHP dependencies, run:

```bash
composer install
```

4. Check the [Releases](https://github.com/Ankit12prajapat/aiwa-code-quality/releases) section for any additional setup files you may need to download and execute.

## Contributing

We welcome contributions to improve the coding standards and automation processes. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and open a pull request.

We appreciate all contributions, whether they are small fixes or major enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to the AiWA development team:

- Email: support@aiwa.com
- GitHub: [AiWA GitHub](https://github.com/AiWA)

Thank you for checking out the Aiwa Code Quality repository! Together, we can maintain high standards in our coding practices.