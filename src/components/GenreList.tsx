import {
  HStack,
  Image,
  Skeleton,
  List,
  ListItem,
  Text,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

const GenreList = () => {
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
          <ListItem key={genre.id} justifyContent="space-between" paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"35px"}
                borderRadius={10}
              />
              <Text> {genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
