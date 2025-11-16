import type { PaletteOptions } from "@mui/material/styles";

export const lightPalette = {
  mode: "light",
  primary: { main: "#078480", hover: "#00524F", contrastText: "#FFFFFF" },
  secondary: { main: "#505558", contrastText: "#FFFFFF", dark: "#35383B" },
  neutral: {
    input: {
      disabled: "#F2F4F5",
      default: "#FBFBFC",
      hover: "#E8EAEC",
      border: { default: "#DBDEE1", hover: "#ADB2B7", disabled: "#F2F4F5" },
      error: { default: "#FFF0F1", border: "#E4626F" },
    },
  },
  text: { disabled: "#505558", primary: "#151617", tertiary: "#6B7076" },
  focus: { main: "#3ABCB7" },
  error: { main: "#D63443", hover: "#5F030C", contrastText: "#FFFFFF" },
} as unknown as PaletteOptions;

export const darkPalette = {
  mode: "dark",
  primary: { main: "#70D2C8", hover: "#ABE3DD", contrastText: "#000000" },
  secondary: { main: "#EDEEFC", dark: "#F4F4FF" },
  error: { main: "#F28F99", hover: "#FFDBDF", contrastText: "#000000" },
  neutral: {
    input: {
      disabled: "#41424D",
      default: "#20212B",
      hover: "#41424D",
      border: { default: "#747581", hover: "#9D9EAB", disabled: "#F2F4F5" },
      error: { default: "#20212B", border: "#F28F99" },
    },
  },
  text: { disabled: "#9D9EAB", primary: "#E6EEF2", secondary: "#DFE0EE", tertiary:"#BCBDCA" },
  focus: { main: "#3ABCB7" },
} as  unknown as PaletteOptions;
