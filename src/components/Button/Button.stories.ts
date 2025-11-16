import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "error"],
    },
    size: { table: { disable: true }, control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Label",
  },
};

export const Secondary: Story = {
  args: {
    label: "Label",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Label",
  },
};
