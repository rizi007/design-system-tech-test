import React from 'react';
// Avoid importing Storybook types in this file to prevent editor/tsc complaints
// in environments where Storybook's types aren't available. Use a lightweight
// local alias so we can still export a preview object without pulling types.
type Preview = any;
import { DesignSystemThemeProvider } from '../src/theme/DesignSystemThemeProvider';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (Story: any, context: any) => (
    <DesignSystemThemeProvider mode={(context.globals.theme as 'light' | 'dark') ?? 'light'}>
      <Story />
    </DesignSystemThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
};

export default preview;
