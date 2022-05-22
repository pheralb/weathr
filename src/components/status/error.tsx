import { Alert, AlertTitle, Text } from "@chakra-ui/react";

type Props = {
  message?: string;
};

const Error = ({ message }: Props) => {
  return (
    <Alert status="error">
      <AlertTitle>
        <Text fontWeight="bold" mr="3">
          An error has occurred:
        </Text>
        {message}
      </AlertTitle>
    </Alert>
  );
};

export default Error;
