import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { RocketLaunch, X } from "phosphor-react";

type Props = {
  message?: string;
  updateBtn?: () => void;
  closeBtn?: () => void;
};

const SWUpdateMessage = ({ message, updateBtn, closeBtn }: Props) => {
  return (
    <Box p="14" zIndex={2} borderWidth="1px" borderRadius="10px">
      <Text mb="6" fontFamily="Inter-Semibold" fontSize="16px">
        🚀 {message}
      </Text>
      <HStack spacing="4" justifyContent="space-between">
        <Button fontWeight="light" leftIcon={<RocketLaunch size={22} />} onClick={updateBtn}>Update</Button>
        <Button fontWeight="light" leftIcon={<X size={22} />} onClick={closeBtn}>Close</Button>
      </HStack>
    </Box>
  );
};

export default SWUpdateMessage;
