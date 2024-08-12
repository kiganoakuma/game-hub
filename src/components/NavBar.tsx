import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (onSearch: string) => void;
}

const NavBar = ({ onSearch }: Props) => (
  <HStack padding="10px" spacing={5}>
    <Image src={logo} boxSize="60px" />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch></ColorModeSwitch>
  </HStack>
);

export default NavBar;
