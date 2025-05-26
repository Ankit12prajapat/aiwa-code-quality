module.exports = {
    extends: ['@wordpress/stylelint-config/scss'], // or /css if not using SCSS
    rules: {
        // Your custom rules or overrides
    },
    ignoreFiles: ['node_modules/**', 'vendor/**', 'build/**', '*.min.css'],
};
