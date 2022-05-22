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
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { TextAlignRight } from "phosphor-react";
import Search from "@/components/search";
import { Link as RouterLink } from "react-router-dom";

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
      _hover={{ opacity: 1 }}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <RouterLink to="/">
          <ChakraLink
            _focus={{ borderColor: "transparent" }}
            _hover={{ textTransform: "" }}
          >
            <Flex direction="column">
              <Heading fontSize="19">weathr</Heading>
              <Text fontSize="13" color="gray.300">
                Today, {date}
              </Text>
            </Flex>
          </ChakraLink>
        </RouterLink>
        <Box>
          <Search />
        </Box>
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
              icon={<Icon as={TextAlignRight} />}
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
