module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Integrates with Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'react/prop-types': 'off', // Disable PropTypes if using TypeScript
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
