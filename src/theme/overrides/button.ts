import type { Theme, Components } from "@mui/material/styles";
import { tokens } from "../tokens";

// Lightweight recursive style object type — avoids pulling in @mui/system just
// to get SystemStyleObject. Narrower than `any` while remaining flexible for
// theme-driven CSS-in-JS objects (pseudo selectors, nested objects, numbers).
export interface StyleObject {
  [key: string]: string | number | boolean | StyleObject | undefined;
}

/**
 * Returns a theme-aware Button overrides object for MUI `components.MuiButton`.
 * If `theme` is omitted, returns a minimal static shape useful for passing into
 * `createTheme` (before the theme is available).
 */
export function buttonOverrides(theme?: Theme) {
  const base: Components<Theme>["MuiButton"] = {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      disableFocusRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
          ...tokens.typography.body.medium500,
      } as StyleObject,
    },
  };

  if (!theme) return base;

  const focusColor =theme.palette.focus?.main;

  const themed: Components<Theme>["MuiButton"] = {
    ...base,
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        textTransform: "none",
        ...theme.tokens.typography.body.medium500,
      } as StyleObject,
    },
    variants: [
      // contained primary
      {
        props: { variant: "contained", color: "primary" },
        style: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText ,
          "&:hover": { backgroundColor: theme.palette.primary.hover },
          "&:disabled": { color: theme.palette.text.disabled,backgroundColor: theme.palette.neutral?.input?.disabled },
          "&:focus-visible": { outline: `3px solid ${focusColor}`, outlineOffset: "2px" },
        },
      },
      // contained secondary
      {
        props: { variant: "contained", color: "secondary" },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText ,
          "&:hover": { backgroundColor: theme.palette.secondary.hover },
          "&:disabled": {color: theme.palette.text.disabled, backgroundColor: theme.palette.neutral?.input?.disabled },
          "&:focus-visible": { outline: `3px solid ${focusColor}`, outlineOffset: "2px" },
        },
      },
      // contained error
      {
        props: { variant: "contained", color: "error" },
        style: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.error.contrastText ,
          "&:hover": { backgroundColor: theme.palette.error.hover },
          "&:disabled": { color: theme.palette.text.disabled, backgroundColor: theme.palette.neutral?.input?.disabled },
          "&:focus-visible": { outline: `3px solid ${focusColor}`, outlineOffset: "2px" },
        },
      },
      // outlined primary
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          borderColor: theme.palette.neutral?.input?.border?.default,
          backgroundColor: theme.palette.neutral?.input?.default,
          color: theme.palette.primary.main,
          "&:hover": { backgroundColor: theme.palette.neutral?.input?.hover, borderColor: theme.palette.neutral?.input?.border?.hover },
          "&:focus-visible": { outline: `3px solid ${focusColor}`, outlineOffset: "2px" },
          "&:disabled": { color: theme.palette.text.disabled,borderColor: theme.palette.neutral?.input?.border?.disabled,  backgroundColor: theme.palette.neutral?.input?.disabled },
        },
      },
      // outlined secondary
      {
        props: { variant: "outlined", color: "secondary" },
        style: {
          borderColor: theme.palette.neutral?.input?.border?.default,
          backgroundColor: theme.palette.neutral?.input?.default,
          color: theme.palette.text.primary,
          "&:hover": { backgroundColor: theme.palette.neutral?.input?.hover, borderColor: theme.palette.neutral?.input?.border?.hover },
          "&:disabled": { color: theme.palette.text.disabled,borderColor: theme.palette.neutral?.input?.border?.disabled,  backgroundColor: theme.palette.neutral?.input?.disabled },
        },
      },
      // outlined error
      {
        props: { variant: "outlined", color: "error" },
        style: {
          color: theme.palette.error.main,
          borderColor: theme.palette.neutral?.input?.border?.default,
          backgroundColor: theme.palette.neutral?.input?.default,
          "&:hover": { backgroundColor: theme.palette.neutral?.input?.hover, borderColor: theme.palette.neutral?.input?.border?.hover },
          "&:focus-visible": { outline: `3px solid ${focusColor}`, outlineOffset: "2px" },
          "&:disabled": { color: theme.palette.text.disabled,borderColor: theme.palette.neutral?.input?.border?.disabled,  backgroundColor: theme.palette.neutral?.input?.disabled },
        },
      },
    ],
  };

  return themed;
}
