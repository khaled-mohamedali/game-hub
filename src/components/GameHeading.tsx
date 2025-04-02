import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;
  return (
    <Heading size="4xl" marginBottom={5}>
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
