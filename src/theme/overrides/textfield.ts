import type { Theme, Components } from "@mui/material/styles";
import { background } from "storybook/internal/theming";

// Small style object type to avoid bringing in @mui/system types
interface StyleObject {
  [key: string]: string | number | boolean | StyleObject | undefined;
}

/**
 * Returns theme-aware overrides for MUI OutlinedInput. If `theme` is omitted
 * a small static shape is returned that can be passed to `createTheme`.
 */
export function textFieldOverrides(theme?: Theme): Components<Theme>["MuiOutlinedInput"] {
  const base: Components<Theme>["MuiOutlinedInput"] = {
    styleOverrides: {},
  };

  if (!theme) return base;

  const themed: Components<Theme>["MuiOutlinedInput"] = {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.neutral?.input?.default,
        borderColor: theme.palette.neutral?.input?.border?.default,
        color: theme.palette.text.primary,
        transition: "none",
        // ensure the input area and outline do not animate
        ".MuiOutlinedInput-root": {
          transition: "none",
        },
        // On hover, only adjust the outline border color — avoid changing
        // the notched outline background which can overlay and hide input text.
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.neutral?.input?.border?.hover,
         
        },
        // Focus: apply a layered box-shadow so the visible ring is separated
        // from the border (an inner gap using the background color, then a
        // colored outer ring). This preserves the outline border and avoids
        // covering input text.
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.neutral?.input?.border?.default,
          boxShadow: `0 0 0 3px ${theme.palette.background.default}, 0 0 0 6px ${
            theme.palette.focus?.main
          }`,
          "&.Mui-error": {
            borderColor: theme.palette.neutral?.input?.error?.border
          },
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          border: `1px solid ${theme.palette.neutral?.input?.error?.border}`,
          "&:hover":{
            borderColor: theme.palette.neutral?.input?.border?.hover,
          }
        },
        // When the root has error, tint the input text and ensure the outline
        // uses the designated error border color. Also provide a focused error
        // ring when the field is focused while in error state.
        "&.Mui-error": {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.neutral?.input?.error?.default,
          // make placeholder slightly tinted when in error
          "& input::placeholder": {
            color: theme.palette.text.tertiary,
          },
        },
        "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
         
        },
      } as StyleObject,
      notchedOutline: {
        borderColor: theme.palette.neutral?.input?.border?.default,
        transition: "none",
      } as StyleObject,
      input: {
        padding: `${theme.spacing(1)} `,
        // use the 400-weight body token for input text
        ...theme.tokens.typography.body.medium400,
        "&::placeholder": {
          color: theme.palette.text?.tertiary,
          opacity: 1,
        },
        // Add a hover state on the input element itself. We use
        // `theme.palette.action.hover` (a translucent overlay color) so
        // the visual feedback doesn't paint over or obscure the text.
        "&:hover": {
          backgroundColor: theme.palette.neutral?.input?.hover,
          color: theme.palette.text.primary,
        },
      } as StyleObject,
    },
  };

  return themed;
}

export const inputLabelOverrides = {
  defaultProps: {},
  styleOverrides: {},
};
