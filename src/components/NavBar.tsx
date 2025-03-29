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
