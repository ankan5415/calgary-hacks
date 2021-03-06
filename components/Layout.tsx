import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Box p="5">
    <Header />
    {props.children}
  </Box>
);

export default Layout;
