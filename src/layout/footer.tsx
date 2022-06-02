import {
  Flex,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Flex
      as="footer"
      flexDirection="row"
      w="full"
      bottom="0"
      zIndex={1000}
      alignItems="center"
      justifyContent="center"
      px={{ base: 5, sm: 7 }}
      py={5}
      mt="5"
    >
      <Text py={{ base: "2", sm: "0" }}>
        <ChakraLink href="https://github.com/pheralb" isExternal>
          🚀 built by Pablo
        </ChakraLink>
      </Text>
    </Flex>
  );
};

export default Footer;
