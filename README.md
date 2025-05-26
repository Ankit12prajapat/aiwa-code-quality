# AIWA Code Quality Standards

This repository contains shared linting, formatting, and CI rules for all AiWA projects. It ensures consistent, clean, and accessible code across all AIWA tools and plugins.

## Structure

- `eslint/` - JavaScript linting rules
- `stylelint/` - CSS linting rules (prefix: `aiwa_`)
- `htmlhint/` - HTML semantic & accessibility rules
- `php/` - WordPress PHP Coding Standards config via Composer
- `vscode/` - Optional VS Code settings for instant linting
- `.github/workflows/` - Reusable GitHub Actions for CI lint checks

## Usage

### 1. Add as a submodule (recommended)
```bash
git submodule add https://github.com/aiwa-org/aiwa-code-quality .aiwa-code-quality
```

### 2. Reference config files
- `.eslintrc.json`
```json
{ "extends": "./.aiwa-code-quality/eslint/.eslintrc.json" }
```
- `.stylelintrc.json`
```json
{ "extends": "./.aiwa-code-quality/stylelint/.stylelintrc.json" }
```
- `.htmlhintrc`
```bash
cp .aiwa-code-quality/htmlhint/.htmlhintrc .
```

### 3. Import GitHub Actions workflow (optional)
```yaml
curl -o .github/workflows/code-quality.yml https://raw.githubusercontent.com/aiwa-org/aiwa-code-quality/main/.github/workflows/code-quality.yml
```

## License
© 2025 AiWA. Shared under LicenseRef-AiWA-Proprietary. For internal ecosystem use only.
