import { Button, Flex, Text } from "@chakra-ui/react";
import { NavigationArrow } from "phosphor-react";
import CustomLink from "@/common/link";
import Show from "@/animate/show";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <NavigationArrow size={80} weight="bold" />
        <Text fontSize="6xl" fontFamily="Inter-Semibold">
          Error 404
        </Text>
        <Text mb="4">The page you are trying to access does not exist.</Text>
        <Show>
          <CustomLink href="/">
            <Button fontWeight="light" borderWidth="1px">Go home</Button>
          </CustomLink>
        </Show>
      </Flex>
    </>
  );
};

export default Error404;
