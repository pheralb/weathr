import { Box, Icon, Text } from "@chakra-ui/react";
import Link from "@/common/link";
import { SearchData } from "@/interfaces/searchData";
import { MapPin } from "phosphor-react";

const SearchItem = ({ name, region, country }: SearchData) => {
  return (
    <>
      <Link href={`/search/${name}`}>
        <Box p="3" borderWidth="1px" borderRadius="5px" mb="2">
          <Text fontSize="14px" fontFamily="Inter-Semibold">
            <Icon as={MapPin} mr="2" />
            {name}
          </Text>
          <Text>
            {region} - {country}
          </Text>
        </Box>
      </Link>
    </>
  );
};

export default SearchItem;
