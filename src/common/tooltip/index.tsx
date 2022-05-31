import { Tooltip, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  message: string;
  children?: React.ReactNode;
};

const CustomTooltip = ({ message, children }: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const color = useColorModeValue("gray.900", "gray.100");
  return (
    <Tooltip
      label={message}
      aria-label={message}
      fontFamily="Inter-Semibold"
      fontSize="13px"
      bg={bg}
      color={color}
      borderWidth="1px"
      borderRadius="3px"
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
