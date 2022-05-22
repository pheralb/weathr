import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

type Props = {
  message?: string;
};

const Loading = ({ message }: Props) => {
  return (
    <Center>
      <VStack>
        <Spinner />
        <Text>{message}</Text>
      </VStack>
    </Center>
  );
};

export default Loading;
