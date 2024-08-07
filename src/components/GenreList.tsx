import { Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
