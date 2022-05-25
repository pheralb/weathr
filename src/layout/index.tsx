import { Box, useDisclosure } from "@chakra-ui/react";

import Header from "@/layout/header";
import Explorer from "@/components/explorer";
import Footer from "@/layout/footer";

import { Heart, X } from "phosphor-react";

type Props = {
  children?: React.ReactNode;
};

const Index = ({ children }: Props) => {
  const sidebar = useDisclosure();

  const handleShowExplorer = () => {
    if (sidebar.isOpen) {
      sidebar.onClose();
    } else {
      sidebar.onOpen();
    }
  };

  return (
    <>
      <Explorer display={sidebar.isOpen ? "flex" : "none"} />
      <Box
        mr={sidebar.isOpen ? { base: 0, md: 80 } : "none"}
        transition=".3s ease"
      >
        <Header
          savedIcon={
            sidebar.isOpen ? (
              <X size={22} weight="bold" />
            ) : (
              <Heart size={22} weight="bold" />
            )
          }
          savedClick={handleShowExplorer}
        />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Index;
