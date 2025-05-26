module.exports = {
    root: true,
    extends: ['plugin:@wordpress/eslint-plugin/recommended-with-formatting'],
    globals: {
        wp: 'readonly', // If you use global `wp` object
        jQuery: 'readonly', // If you use global jQuery
    },
    rules: {
        // Your custom rules or overrides
    },
    ignorePatterns: ['node_modules/', 'vendor/', 'build/', '*.min.js'],
};
