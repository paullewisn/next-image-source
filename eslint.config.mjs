import { FlatCompat } from '@eslint/eslintrc';
import react from 'eslint-plugin-react';
import ts from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';

const compat = new FlatCompat();

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    plugins: {
      react,
      '@typescript-eslint': ts,
      prettier,
      storybook,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('prettier'),
  ...compat.extends('plugin:storybook/recommended'),
];
