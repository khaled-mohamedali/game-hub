import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize={30}></Image>

      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;

//API KEY RAWG.io
// 5ec77abcfad34a67a9888be67f04d7b6
