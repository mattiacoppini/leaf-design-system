/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import Button from "./index";

export default {
  title: "Core/Button",
  component: Button,
  decorators: [withKnobs],
};

const variantOptions = {
  Contained: "contained",
  Outlined: "outlined",
  Text: "text",
};

const colorOptions = {
  Primary: "primary",
  Secondary: "secondary",
  Success: "success",
  Warning: "warning",
  Alert: "alert",
};

const sizeOptions = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
};

export const UsageDemo = () => {
  const chosenSizeProp = select("size", sizeOptions, "md");
  const chosenVariantProp = select("variant", variantOptions, "contained");
  const chosenColorProp = select("color", colorOptions, "primary");

  return (
    <Button
      variant={chosenVariantProp}
      color={chosenColorProp}
      size={chosenSizeProp}
    >
      {text("text", "Test me!")}
    </Button>
  );
};

export const ContainedPrimary = () => <Button>Primary</Button>;
export const ContainedSecondary = () => (
  <Button color="secondary">Secondary</Button>
);
export const ContainedSuccess = () => <Button color="success">Success</Button>;
export const ContainedWarning = () => <Button color="warning">Warning</Button>;
export const ContainedAlert = () => <Button color="alert">Alert</Button>;

export const OutlinedPrimary = () => (
  <Button variant="outlined">Primary</Button>
);
export const OutlinedSecondary = () => (
  <Button variant="outlined" color="secondary">
    Secondary
  </Button>
);
export const OutlinedSuccess = () => (
  <Button variant="outlined" color="success">
    Success
  </Button>
);
export const OutlinedWarning = () => (
  <Button variant="outlined" color="warning">
    Warning
  </Button>
);
export const OutlinedAlert = () => (
  <Button variant="outlined" color="alert">
    Alert
  </Button>
);

export const TextPrimary = () => <Button variant="text">Primary</Button>;
export const TextSecondary = () => (
  <Button variant="text" color="secondary">
    Secondary
  </Button>
);
export const TextSuccess = () => (
  <Button variant="text" color="success">
    Success
  </Button>
);
export const TextWarning = () => (
  <Button variant="text" color="warning">
    Warning
  </Button>
);
export const TextAlert = () => (
  <Button variant="text" color="alert">
    Alert
  </Button>
);

export const Small = () => <Button size="sm">Small</Button>;
export const Medium = () => <Button size="md">Medium</Button>;
export const Large = () => <Button size="lg">Large</Button>;
