import useGenre, { Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
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
              <Button
                variant="plain"
                fontSize="xl"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
