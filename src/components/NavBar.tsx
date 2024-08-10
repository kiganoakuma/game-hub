import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => (
  <HStack padding="10px" spacing={5}>
    <Image src={logo} boxSize="60px" />
    <SearchInput />
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
