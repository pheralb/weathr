import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "phosphor-react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconChange = useColorModeValue(
    <Sun size={22} weight="bold" />,
    <Moon size={22} weight="bold" />
  );
  const theme = useColorModeValue("Light", "Dark");

  function toggleTheme() {
    toggleColorMode();
  }

  return (
    <IconButton
      onClick={toggleTheme}
      icon={iconChange}
      aria-label={`${theme} mode`}
      variant="ghost"
    />
  );
};

export default Index;
