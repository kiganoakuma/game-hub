import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import theme from "../theme";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack paddingRight={3}>
      <Switch
        colorScheme="customGreen"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
