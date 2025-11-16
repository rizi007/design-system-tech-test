// Shared design tokens used across themes (light and dark)
export const baseFontFamily = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';

// Export tokens and a separate typography object for easier imports in theme.
// Create small shared building blocks to avoid duplicating identical values
const _bodyMediumBase = {
  fontFamily: baseFontFamily,
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '20px',
  leadingTrim: 'none',
  letterSpacing: '0%',
} as const;

const _bodyMedium500 = {
  ..._bodyMediumBase,
  fontWeight: 500,
  textAlign: 'center',
};

const _bodyMedium400 = {
  ..._bodyMediumBase,
  fontWeight: 400,
  // specific to the 400 variant
  verticalAlign: 'middle',
};

export const tokens = {
  typography: {
    body: {
      medium: _bodyMedium500,
      medium500: _bodyMedium500,
      medium400: _bodyMedium400,
    },
  },
  // radius tokens (unitless multiplier against theme.spacing)
  radius: {
    medium: 4,
  },
  spacing: 8,
};

export const typography = tokens.typography;

// Keep backward-compatible exports for existing code
export const sharedTokens = tokens;
