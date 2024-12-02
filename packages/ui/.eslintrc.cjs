/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@kt-cloud-front/eslint-config', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'dist'],
}
