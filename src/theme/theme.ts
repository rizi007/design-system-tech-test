import { createTheme } from "@mui/material/styles";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";
import { tokens, typography } from "./tokens";
import { inputLabelOverrides, textFieldOverrides } from "./overrides/textfield";
import { buttonOverrides } from "./overrides/button";
import { darkPalette, lightPalette } from "./palette";
declare module "@mui/material/styles" {
  interface PaletteColor {
    hover?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
  }
  interface TypeText {
    tertiary?: string;
  }
  interface Palette {
    neutral?: {
      input?: {
        disabled?: string;
        default?: string;
        hover?: string;
        border?: {
          default?: string;
          hover?: string;
          disabled?: string;
        };
        error?: {
          default?: string;
          border?: string;
        };
      };
    };
    focus?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: {
      input?: {
        disabled?: string;
        default?: string;
        hover?: string;
        border?: {
          default?: string;
          hover?: string;
          disabled?: string;
        };
        error?: {
          default?: string;
          border?: string;
        };
      };
    };
    focus?: SimplePaletteColorOptions;
  }
  interface Theme {
    tokens: {
      typography: {
        body: {
          medium: {
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            textAlign?: string;
          };
          medium500: {
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            textAlign?: string;
          };
          medium400: {
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            verticalAlign?: string;
          };
        };
      };
    };
  }
  interface ThemeOptions {
    tokens?: {
      typography?: Partial<{
        body: Partial<{
          medium: Partial<{
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            textAlign?: string;
          }>;
          medium500: Partial<{
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            textAlign?: string;
          }>;
          medium400: Partial<{
            fontFamily: string;
            fontWeight: number;
            fontStyle?: string;
            fontSize: string;
            lineHeight: string;
            leadingTrim?: string;
            letterSpacing?: string;
            verticalAlign?: string;
          }>;
        }>;
      }>;
    };
  }
}

const sharedThemeOptions = {
  typography,
  shape: {
    borderRadius: tokens.radius.medium,
  },
  spacing: tokens.spacing,
  components: {
    MuiCssBaseline: {},
    MuiButton: {},
    MuiTextField: {},
    MuiInputLabel: inputLabelOverrides,
  },
  tokens: tokens as any,
} as any;


/* Helper to create a theme and attach palette-aware component overrides */
function makeTheme(palette: any) {
  const theme = createTheme({ ...sharedThemeOptions, palette } as any);
  (theme.components as any).MuiButton = buttonOverrides(theme);
  (theme.components as any).MuiOutlinedInput = textFieldOverrides(theme as any);
  return theme;
}

export const lightTheme = makeTheme(lightPalette);
export const darkTheme = makeTheme(darkPalette);

