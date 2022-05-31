import { Box, useDisclosure } from "@chakra-ui/react";

import Header from "@/layout/header";
import Explorer from "@/components/explorer";

import { Heart, X } from "phosphor-react";

type Props = {
  children?: React.ReactNode;
};

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Index;
