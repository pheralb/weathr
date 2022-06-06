import { ExplorerData } from "@/interfaces/explorerData";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "@/common/link";
import { MapTrifold } from "phosphor-react";

const Location = (props: ExplorerData) => {
  return (
    <Link href={`/search/${props.title}`}>
      <Box p="4" borderWidth="1px" borderRadius="10px" mb="3">
        <HStack mb="1">
          <Text fontFamily="Inter-Semibold" fontSize="15px">
            {props.title}
          </Text>
          <Text color="gray.500" fontSize="12px">{props.country}</Text>
        </HStack>
        <HStack>
          <Icon as={MapTrifold} />
          <Text color="gray.500" textTransform="lowercase" isTruncated>
            /{props.url}
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default Location;
