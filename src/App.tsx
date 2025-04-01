import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  const [seletedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show when={isLg}>
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={seletedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(p) => setSelectedPlatform(p)}
        ></PlatformSelector>
        <GameGrid
          seletedGenre={seletedGenre}
          seletedPlatform={selectedPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
