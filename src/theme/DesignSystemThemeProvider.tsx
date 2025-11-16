import React from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme/theme';

export type DesignSystemThemeMode = 'light' | 'dark';

export interface DesignSystemThemeProviderProps {
  children?: React.ReactNode;
  /** Choose which theme to apply. Defaults to 'light' */
  mode?: DesignSystemThemeMode;
  /** Optional custom theme to use instead of the built-in light/dark */
  theme?: Theme;
}

export function DesignSystemThemeProvider({ children, mode = 'light', theme }: DesignSystemThemeProviderProps) {
  const appliedTheme = theme ?? (mode === 'dark' ? darkTheme : lightTheme);

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default DesignSystemThemeProvider;
