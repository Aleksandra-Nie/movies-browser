import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import Navigation from "./common/Navigation";
import MoviesContainer from "./features/movies/MoviesContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <MoviesContainer />
    </ThemeProvider>
  );
}

export default App;
