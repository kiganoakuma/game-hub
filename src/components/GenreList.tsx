import {
  HStack,
  Image,
  Skeleton,
  List,
  ListItem,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { error, data, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skel) => (
            <ListItem key={skel} justifyContent="space-between" paddingY={1}>
              <HStack>
                <Skeleton boxSize={"35px"} borderRadius={10} />
                <SkeletonText noOfLines={1} mt="4"></SkeletonText>
              </HStack>
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"35px"}
                borderRadius={10}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                color={genre.id === selectedGenre?.id ? "blue.200" : "normal"}
                sx={{
                  _hover: { textDecoration: "none" },
                }}
                fontSize={"md"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
