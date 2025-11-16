import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";

/**
 * Props for the design-system TextField component.
 * - This component intentionally does not render a top label. Use `placeholder`
 *   or provide an `aria-label` for accessibility.
 */
export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  /** Visible placeholder text inside the input */
  placeholder?: string;

  /** Use `value` and `onChange` to control the component, or leave uncontrolled */
  value?: string;
}

export type { MuiTextFieldProps };

// Backwards-compatible alias: some files / external consumers may refer to
// `DesignTextFieldProps` — provide a matching export to avoid d.ts breakage.
export type DesignTextFieldProps = TextFieldProps;
