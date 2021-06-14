//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme, Center, FlexStyle } from "./styles";
//components
import AddMovie from "./components/AddMovie";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Center>
        <h1>Movie Watchlist</h1>
      </Center>
      <div>
        <div>
          <AddMovie />
        </div>

        <FlexStyle>
          <WatchList />
          <Watched />
        </FlexStyle>

        <h2>تم بحمد الله </h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
