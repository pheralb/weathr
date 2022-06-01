import { ExplorerData } from "@/interfaces/explorerData";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "@/common/link";
import { MapTrifold } from "phosphor-react";

const Location = (props: ExplorerData) => {
  return (
    <Link href={`/search/${props.title}`}>
      <Box p="4" borderWidth="1px" borderRadius="10px" mb="3">
        <Text fontFamily="Inter-Semibold" fontSize="15px">{props.title}</Text>
        <HStack>
          <Icon as={MapTrifold} />
          <Text color="gray.500">{props.country} - </Text>
          <Text color="gray.500" textTransform="lowercase">
            /{props.url}
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default Location;
