import useGenre from "@/hooks/useGenres";
import { Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  return (
    <>
      {error && <Text>Error loading the types</Text>}
      <ul>
        {isLoading && <Spinner></Spinner>}
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
