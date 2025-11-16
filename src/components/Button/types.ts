import type { ButtonProps as MuiButtonProps } from "@mui/material";

/**
 * Props for the design-system `Button` component.
 *
 * The design system enforces a small API surface so components remain
 * consistent across apps. Key constraints:
 * - `size` is fixed to `"medium"` (consumers cannot change it)
 * - `color` is limited to the three design tokens: `"primary" | "secondary" | "error"`
 *
 * @remarks
 * This type re-uses the MUI `ButtonProps` shape but intentionally omits
 * `size` and `color` so the design system can enforce token usage and
 * consistent sizing. Any other MUI `Button` props are still available.
 *
 * @example
 * ```tsx
 * import { Button } from 'design-system-tech-test';
 *
 * <Button label="Save" color="primary" onClick={() => {}} />
 * ```
 *
 * @public
 */
// Omit `size` so it's fixed to medium and `variant` so we can constrain it to
// the two allowed variants used by the design system.
export interface ButtonProps extends Omit<MuiButtonProps, "size" | "color" | "variant"> {
  /** Visible label for the button. Required. */
  label: string;

  /**
   * Token color — limited to the three allowed semantic colors used across
   * the design system. Defaults to `primary`.
   */
  color?: "primary" | "secondary" | "error";

  /** Size is fixed to 'medium' for this design system component */
  size?: "medium";
  /** Whether the button is disabled. Included explicitly so Storybook autodocs shows it. */
  disabled?: boolean;
  /**
   * Only the two variants supported by the design system are allowed.
   * - `contained` — solid background
   * - `outlined`  — bordered button
   */
  variant?: "contained" | "outlined";
}

export type { MuiButtonProps };
