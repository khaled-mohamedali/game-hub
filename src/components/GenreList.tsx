import useGenre from "@/hooks/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  return (
    <>
      {error && <Text>Error loading the types</Text>}
      <List.Root variant="plain">
        {isLoading && <Spinner></Spinner>}
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="40px"
                borderRadius={8}
                fit="cover"
              ></Image>
              <Text fontSize="xl">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
