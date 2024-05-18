module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-void': 'off',
        '@typescript-eslint/comma-dangle': ["error", "never"]
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb-typescript',
        'eslint-config-prettier'
      ],
      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      }
    }
  ]
};
