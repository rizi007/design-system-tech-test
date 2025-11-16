# Design System Tech Test

A small design-system package built with React, TypeScript and MUI. This repo contains theme-driven components (Button, TextField) and a Storybook for exploring states and accessibility.

## Prerequisites

  - Node 20 or newer
  - A package manager: pnpm (recommended), npm, or yarn

  pnpm is recommended for faster installs and reproducible node_modules layouts.

## Install

  Assuming this package is published to your registry as `design-system-tech-test`, install it into your project:

  ```bash
  # npm
  npm install design-system-tech-test

  # pnpm
  pnpm add design-system-tech-test

  # yarn
  yarn add design-system-tech-test
  ```

## Consumer app quickstart (Vite)

  Create a new consumer app using Vite with the React + TypeScript template. Replace `<consumer-app-name>` with your app name.

  ```bash
  # npm
  npm create vite@latest <consumer-app-name> -- --template react-ts

  # pnpm
  pnpm create vite@latest <consumer-app-name> -- --template react-ts

  # yarn
  yarn create vite <consumer-app-name> --template react-ts
  ```

  Then:

  ```bash
  cd <consumer-app-name>
  pnpm install

  # add the design system locally for testing
  pnpm add ../path-to/design-system-repo
  ```

  ## Install required dependencies

  Your design system requires these runtime dependencies in the consumer project:

  - react and react-dom: any 19.x.x version (e.g. 19.0.0, 19.0.1, 19.1.0, …)
  - @mui/material: version 7.3.2 (or a compatible 7.3.x)
  - @emotion/react: >= 11.14.0 and < 12.0.0
  - @emotion/styled: >= 11.14.0 and < 12.0.0

  Install with pnpm (recommended):

  ```bash
  pnpm add react@^19 react-dom@^19 @mui/material@7.3.2 @emotion/react@^11.14.0 @emotion/styled@^11.14.0
  ```

  Or with npm:

  ```bash
  npm install react@^19 react-dom@^19 @mui/material@7.3.2 @emotion/react@^11.14.0 @emotion/styled@^11.14.0
  ```

  Or with yarn:

  ```bash
  yarn add react@^19 react-dom@^19 @mui/material@7.3.2 @emotion/react@^11.14.0 @emotion/styled@^11.14.0
  ```

## Usage

  Wrap your app with the ThemeProvider exported by the package and import components directly:

  ```tsx
  import React from 'react'
  import { DesignSystemThemeProvider, Button } from 'design-system-tech-test'

  export default function App() {
    return (
      <DesignSystemThemeProvider mode="light">
        <Button color="primary" variant="contained">Hello</Button>
      </DesignSystemThemeProvider>
    )
  }
  ```
## Storybook & local development

  This repository includes Storybook for visual testing and accessibility checks.

  Run Storybook locally:

  ```bash
  pnpm install
  pnpm run dev
  # open http://localhost:3000
  ```

  Build Storybook for publishing:

  ```bash
  pnpm run build-storybook
  ```

## Build artifacts

  The package builds ESM and emits TypeScript declarations. Output files are written to `dist/` (for example `dist/index.js` and `dist/index.d.ts`).
## Notes

  - Accessibility: TextField helper and validation messages are wired via `aria-describedby`, and input-level `aria-label` is applied to the native input for screen readers.
  - Theming: tokens and component overrides live under `src/theme`. Both light and dark theme factories are provided.

  - Keep React and MUI versions aligned between the design system and consumer app to avoid duplicate React instances or peer-dependency conflicts.
  - Add other MUI packages in the consumer (for example `@mui/icons-material`) as needed by your app.

