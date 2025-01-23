import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { Header } from "./common/Navigation/Header";
import MoviesContainer from "./features/movies/MoviesContainer";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Header />
      <MoviesContainer />
      <HashRouter>
        <MoviesPage />
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/" element={<PeoplePage />} />
          <Route path="/person/:id" element={<PersonPage />} />
        </Routes>
      </HashRouter>
  </ThemeProvider>
  );
}

export default App;
