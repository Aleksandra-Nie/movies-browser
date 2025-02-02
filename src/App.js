import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import Navigation from "./common/Navigation";
import MovieDetails from "./features/movies/MovieDetails";
import MoviesContainer from "./features/movies/MoviesContainer";
import IntroductionLayer from "./features/movies/MovieDetails/IntroductionLayer";

function App() {
  return (
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/person/:id" element={<PersonPage />} />
        </Routes>
      <div>
      <MoviesContainer />
      <IntroductionLayer />
      <MovieDetails />
    </div>
      </HashRouter>
  );
};

export default App;

