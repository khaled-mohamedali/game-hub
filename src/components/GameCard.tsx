import { Game } from "@/hooks/useGames";
import getCroppedUrl from "@/services/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedUrl(game.background_image)}></Image>
      <Card.Body>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <HStack justifyContent={"space-between"} marginY={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore criticScore={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
