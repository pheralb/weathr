import { Box, Flex, HStack, Text } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="xs"
          bg="light.dark"
          shadow="lg"
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
