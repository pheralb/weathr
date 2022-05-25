import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="xs"
          bg={bg}
          shadow="md"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Box py={5} textAlign="center">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Card;
