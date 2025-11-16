import "@fontsource/inter/500.css";
import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { lightTheme, darkTheme } from "../src/theme/theme";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
  // Optional: configure the a11y addon rules or to run manual checks
  // The `element` parameter was removed; use `context` (include/exclude)
  // Use `body` to target the preview iframe content — `#root` may not exist
  // inside Storybook's iframe which can cause "No elements found" errors.
  context: { include: ['body'] },
      config: {},
      options: {
        // show the accessibility panel by default
        checks: {},
      },
    },
  },
};

export default preview;
