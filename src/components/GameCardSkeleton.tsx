import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width={"350px"} borderRadius={10} overflow={"hidden"}>
      <Stack gap={1}>
        <Skeleton height="200px"></Skeleton>

        <SkeletonText noOfLines={1} />
        <HStack marginX={3}>
          <SkeletonCircle size="10" />
          <SkeletonCircle size="10" />
          <SkeletonCircle size="10" />
        </HStack>
      </Stack>
    </Card.Root>
  );
};

export default GameCardSkeleton;
