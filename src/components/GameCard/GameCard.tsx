import { useEffect, useRef, useState } from "react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/img-url";
import CriticScore from "../CriticScore";
import PlatformIconList from "../PlatformIconList";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const headingFont = game.name.length >= 20 ? "xl" : "2xl";

  return (
    <Card minHeight="300px">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          id="game_title"
          whiteSpace={"nowrap"}
          fontSize={headingFont}
          css={{
            maskImage:
              "linear-gradient(to right, black calc(100% - 48px), transparent 100%)",
            "&:hover": {
              overflowX: "auto",
            },
          }}
        >
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
