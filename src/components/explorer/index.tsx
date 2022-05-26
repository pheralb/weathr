import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";

type Props = {
  w?: string;
  borderLeft?: string;
  display?: string;
};

const Index = (props: Props) => {
  const [locations, setLocations] = useState(
    localStorage.savedLocations ? JSON.parse(localStorage.savedLocations) : []
  );

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(locations));
  }, [locations]);

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right="0"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      w="80"
      shadow="sm"
      {...props}
    >
      <Flex p="4" mt="2" direction="column">
        <Text fontSize="2xl" mb="3" fontFamily="Inter-Semibold">
          Saved:
        </Text>
        {}
      </Flex>
    </Box>
  );
};

export default Index;
