import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize={55}></Image>
      <SearchInput></SearchInput>
      <ColorModeButton scale={1.5}></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
