import { addParameters, addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import LeafTheme from "../lib/utils/ThemeProvider/themes/LeafTheme";
import { createGlobalStyle } from "styled-components";

addParameters({
  previewTabs: {
    docs: {
      hidden: true,
      page: null,
    },
    canvas: {
      title: "Story",
      hidden: true,
    },
  },
});

addDecorator((Story) => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <ThemeProvider theme={LeafTheme}>
      <Story />
    </ThemeProvider>
  </>
));
