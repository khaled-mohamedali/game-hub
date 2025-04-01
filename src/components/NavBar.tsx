import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image src={logo} boxSize={50}></Image>
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
