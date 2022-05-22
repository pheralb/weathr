import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  Heading,
} from "@chakra-ui/react";
import { TextAlignRight } from "phosphor-react";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const mobileNav = useDisclosure();
  const date = new Date().toLocaleDateString();

  const HeaderMenu = () => {
    return (
      <>
        <Button variant="ghost">Sign in</Button>
      </>
    );
  };

  return (
    <Box
      as="header"
      bg={bg}
      opacity="0.7"
      w="full"
      px={{ base: 5, sm: 6 }}
      py={5}
      transition="all 0.4s ease"
      _hover={{ opacity: 1}}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex direction="column">
          <Heading fontSize="19">weathr</Heading>
          <Text fontSize="13" color="gray.300">
            Today, {date}
          </Text>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            display={{ base: "none", md: "inline-flex" }}
          >
            <HeaderMenu />
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              aria-label="Open menu"
              variant="ghost"
              icon={<TextAlignRight size={25} weight="bold" />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <HeaderMenu />
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
