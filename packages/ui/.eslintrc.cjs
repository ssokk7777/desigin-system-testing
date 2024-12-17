/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@kt-cloud-front/eslint-config', 'plugin:storybook/recommended', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: ['cypress'],
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'dist'],
}
