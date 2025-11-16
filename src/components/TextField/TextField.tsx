import React, { type FC, useEffect, useId, useState } from "react";
import { TextField as MuiTextField } from "@mui/material";
import type { TextFieldProps } from "./types";

/**
 * Design system TextField
 * - No top label is rendered. Use `placeholder` or `aria-label` for accessibility.
 * - Animations/transitions are disabled to match the static visuals of the UI kit.
 */
export const TextField: FC<TextFieldProps> = (props) => {
  const { placeholder, value: valueProp, fullWidth = true, onChange, ...rest } = props;
  const [internalValue, setInternalValue] = useState<string | undefined>(valueProp ?? "");

  useEffect(() => {
    // keep internal state in sync when valueProp changes from outside
    if (valueProp !== undefined) setInternalValue(valueProp);
  }, [valueProp]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    // update internal state only when uncontrolled
    if (valueProp === undefined) setInternalValue(e.target.value);
    if (onChange) onChange(e as any);
  };

  const renderedValue = valueProp !== undefined ? valueProp : internalValue;

  // Accessibility: if the field is in an error state, ensure screen readers
  // are informed. Prefer an explicit `aria-label` if supplied; otherwise
  // derive from `placeholder`. When `helperText` is present and the field
  // is errored, append that text to the aria-label so it will be announced.
  // Important: do NOT forward a top-level `aria-label` prop to the TextField
  // root element (MUI will place it on the div). We extract and remove it
  // from `rest` and instead place the label on the native input via
  // `slotProps.input` below.
  const { ["aria-label"]: topAriaLabel, slotProps: consumerSlotPropsRaw, ...otherRest } = rest as any;
  // consumerSlotPropsRaw is intentionally retained in case callers used
  // slotProps; we prefer merging into InputProps for consistent input-level
  // aria handling.
  const explicitAriaLabel = topAriaLabel as string | undefined;
  const isError = Boolean((otherRest as any).error);
  const helperText = (otherRest as any).helperText;

  // generate a stable id to reference the helper text for aria-describedby
  const reactId = useId();
  const helperId = helperText ? `${reactId}-helper` : undefined;

  let computedAriaLabel: string | undefined = explicitAriaLabel ?? placeholder;
  if (isError) {
    if (helperText) {
      // append helper text to aria-label so screen readers announce it
      computedAriaLabel = `${computedAriaLabel ?? ""}${computedAriaLabel ? " - " : ""}Error: ${String(helperText)}`;
    } else if (!computedAriaLabel) {
      computedAriaLabel = "Error";
    } else {
      computedAriaLabel = `${computedAriaLabel} - Error`;
    }
  }
  const consumerSlotProps = consumerSlotPropsRaw as Record<string, any> | undefined;
  const mergedSlotProps = {
    ...(consumerSlotProps || {}),
    htmlInput: {
      ...(consumerSlotProps?.input || {}),
      ...(computedAriaLabel && !consumerSlotProps?.input?.["aria-label"] ? { "aria-label": computedAriaLabel } : {}),
      // attach aria-describedby to the native input when helper text exists
      ...(helperId && !consumerSlotProps?.input?.["aria-describedby"] ? { "aria-describedby": helperId } : {}),
    },
  };
 

  return (
    <MuiTextField
      variant="outlined"
      placeholder={placeholder}
      value={renderedValue}
      onChange={handleChange}
      size="medium"
      fullWidth={fullWidth}
      // no top label — if consumers pass `label` we intentionally ignore it and
      // rely on placeholder or aria-label for screen readers.
      label={undefined as any}
      {...otherRest}
      slotProps={mergedSlotProps}
    
    />
  );
};

export default TextField;
