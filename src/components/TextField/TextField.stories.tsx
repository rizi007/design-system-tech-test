import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
  args: {
    placeholder: "",
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "",
    disabled: false,
    error: false,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Update placeholder here",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Critical: Story = {
  args: {
    value: "Update value here",
    error: true,
  },
};
