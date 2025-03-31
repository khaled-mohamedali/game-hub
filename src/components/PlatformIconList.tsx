import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows color="gray" />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    linux: <FaLinux />,
    web: <BsGlobe />,
    ios: <MdPhoneIphone />,
    android: <FaAndroid />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(
        (platform) =>
          iconMap[platform.slug] && (
            <Icon key={platform.id} color="gray.500" boxSize={5}>
              {iconMap[platform.slug]}
            </Icon>
          )
      )}
    </HStack>
  );
};

export default PlatformIconList;
