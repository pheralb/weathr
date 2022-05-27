import {
  Flex,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import ChangeTheme from "@/components/theme/change";

const Footer = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const date = new Date();
  const timeNow = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <Flex
      position="sticky"
      as="footer"
      bg={bg}
      flexDirection="row"
      w="full"
      bottom="0"
      zIndex={1000}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 5, sm: 7 }}
      py={5}
    >
      <Text fontSize="xl">{timeNow}</Text>
      <Text py={{ base: "2", sm: "0" }}>
        <ChakraLink href="https://github.com/pheralb" isExternal>
          🚀 built by Pablo
        </ChakraLink>
      </Text>

      <Flex>
        <ChangeTheme />
      </Flex>
    </Flex>
  );
};

export default Footer;
