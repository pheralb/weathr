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
  Icon,
} from "@chakra-ui/react";
import { TextAlignRight, Heart } from "phosphor-react";
import Search from "@/components/search";
import Link from "@/components/link";

type Props = {
  savedClick?: () => void;
  savedIcon?: React.ReactElement;
};

const Header = ({ savedIcon, savedClick }: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const colorToday = useColorModeValue("gray.500", "gray.300");
  const mobileNav = useDisclosure();
  const date = new Date().toLocaleDateString();

  const HeaderMenu = () => {
    return (
      <>
        <Button
          variant="ghost"
          fontWeight="light"
          leftIcon={savedIcon}
          onClick={savedClick}
        >
          Saved
        </Button>
      </>
    );
  };

  return (
    <Box as="header" bg={bg} w="full" px={{ base: 5, sm: 6 }} py={5}>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Flex direction="column">
            <Heading fontSize="19">weathr</Heading>
            <Text fontSize="13" color={colorToday}>
              Today, {date}
            </Text>
          </Flex>
        </Link>

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
