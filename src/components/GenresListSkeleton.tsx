import { Card, SkeletonText, Stack } from "@chakra-ui/react";

const GenresListSkeleton = () => {
  return (
    <Stack>
      <SkeletonText noOfLines={10}></SkeletonText>
    </Stack>
  );
};

export default GenresListSkeleton;
