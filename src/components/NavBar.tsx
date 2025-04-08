import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/game-hub.png";
import SearchInput from "./SearchInput";
import { SearchProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize={55} borderRadius={10}></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeButton scale={1.5}></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
