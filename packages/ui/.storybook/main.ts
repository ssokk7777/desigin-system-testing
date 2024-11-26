import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: { features: { interactionsDebugger: boolean }; stories: string[]; framework: { name: any; options: {} }; addons: any[]; typescript: { check: boolean; reactDocgen: string } } = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen',  // Storybook에서 TypeScript 지원 설정
    check: false,                 // tsconfig.json 파일 체크 비활성화
  },
  features: {
    interactionsDebugger: true, // Interactions Debugger 활성화
  },
}
export default config
