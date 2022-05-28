import { Box, Text } from "@chakra-ui/react";
import Link from "@/components/link";
import { SearchData } from "@/interfaces/searchData";

const SearchItem = ({ name }: SearchData) => {
  return (
    <>
      <Link href={`/search/${name}`}>
        <Box>
          <Text>{name}</Text>
        </Box>
      </Link>
    </>
  );
};

export default SearchItem;
