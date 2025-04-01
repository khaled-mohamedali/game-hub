import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root width={400}>
        <Stack gap={1}>
          <Skeleton height="200px"></Skeleton>
          <SkeletonText noOfLines={1} />
          <HStack>
            <SkeletonCircle size="10" />
            <SkeletonCircle size="10" />
            <SkeletonCircle size="10" />
          </HStack>
        </Stack>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
