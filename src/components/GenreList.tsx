import useGenre from "@/hooks/useGenres";
import { Text } from "@chakra-ui/react";
import GenresListSkeleton from "./GenresListSkeleton";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();

  return (
    <>
      {error && <Text>Error loading the types</Text>}
      <ul>
        {isLoading && <GenresListSkeleton></GenresListSkeleton>}
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
