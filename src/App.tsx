import * as React from "react";
import {
  ContentDirection,
  CanvasProvider,
  styled
} from "@workday/canvas-kit-react";
import { Global, css } from "@emotion/react";
import { type } from "@workday/canvas-kit-react";

import { fonts } from "@workday/canvas-kit-react-fonts";

import { HStack, VStack } from "@workday/canvas-kit-labs-react";
import { PageHeader } from "./components/PageHeader";
import { Sidebar } from "./components/Sidebar";

// Applies font styles
const FontContainer = styled("div")(...fonts, {
  ...type.levels.body.small,
  minHeight: "100vh"
});

const globalStyles = `
  html {
    min-height: 100vh;
  };
  body {
    margin: 0;
    min-height: 100vh;
  };
 #root {
    min-height: 100vh;
  }
`;

const theme = {
  canvas: {
    direction: ContentDirection.LTR
  }
};

export const App: React.FC = (props) => {
  return (
    <CanvasProvider theme={theme}>
      <FontContainer>
        <Global styles={css(globalStyles)} />
        <PageHeader>
          <PageHeader.Heading>Canvas Coffee Roasters</PageHeader.Heading>
        </PageHeader>
        {/* <HStack spacing={32}>
          <Sidebar /> */}
        <VStack spacing={0}>{props.children}</VStack>
        {/* </HStack> */}
      </FontContainer>
    </CanvasProvider>
  );
};
