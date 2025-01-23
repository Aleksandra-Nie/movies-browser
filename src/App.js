import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { Header } from "./common/Navigation/Header";
import MoviesContainer from "./features/movies/MoviesContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MoviesContainer />
    </ThemeProvider>
  );
}

export default App;
