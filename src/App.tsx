import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  const [seletedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <PlatformSelector></PlatformSelector>
        <GameGrid seletedGenre={seletedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
