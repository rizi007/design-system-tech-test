import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "./types";
// alpha was used in a previous implementation; keep import removed to avoid unused symbol

/**
 * Button
 *
 * A theme-driven, accessible button component for the design system.
 *
 * Behaviour & constraints:
 * - Size is fixed to `medium` to keep spacing consistent across the design system.
 * - Color must be one of the semantic tokens: `primary`, `secondary` or `error`.
 * - Uses MUI's `Button` under the hood and forwards other supported props.
 *
 * Accessibility:
 * - Use visible focus styles (handled by theme overrides in `theme.ts`).
 * - Consumers should provide descriptive `label` text.
 *
 * @example
 * ```tsx
 * <Button label="Save" color="primary" onClick={() => {}} />
 * ```
 */
export const Button = ({ label, color = "primary", variant = "contained", ...rest }: ButtonProps) => (
  // Force size to 'medium' and rely on theme overrides for look & feel.
  <MuiButton size="small" color={color} variant={variant} {...rest}>
    {label}
  </MuiButton>
);

export default Button;
