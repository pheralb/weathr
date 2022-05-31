import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { TextAlignRight } from "phosphor-react";
import Search from "@/components/search";
import Link from "@/common/link";
import ChangeTheme from "@/components/theme/change";
import Geolocation from "@/components/geolocation";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const colorToday = useColorModeValue("gray.500", "gray.500");
  const mobileNav = useDisclosure();
  const dateNow = new Date().toLocaleDateString();

  const HeaderMenu = () => {
    return (
      <>
        <Geolocation />
        <Search />
        <ChangeTheme />
      </>
    );
  };

  return (
    <>
      <Box as="header" px={{ base: 5, sm: 6 }} py={5}>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          bg={bg}
          w="full"
        >
          <Link href="/">
            <Flex direction="column">
              <Heading fontSize="19">weathr</Heading>
              <Text
                fontSize="13"
                color={colorToday}
                fontFamily="Inter-Semibold"
              >
                Today, {dateNow}
              </Text>
            </Flex>
          </Link>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={2}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <HeaderMenu />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                icon={<Icon as={TextAlignRight} boxSize={22} />}
                onClick={mobileNav.onOpen}
                borderWidth="1px"
              />

              <HStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                justifyContent="center"
                p={5}
                zIndex={2}
                bg={bg}
                spacing={2}
                rounded="sm"
                shadow="sm"
                borderBottomWidth="1px"
              >
                <HeaderMenu />
                <CloseButton
                  mr="2"
                  borderWidth="1px"
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
              </HStack>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
