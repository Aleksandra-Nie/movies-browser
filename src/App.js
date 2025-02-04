import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import MovieDetails from "./features/movies/MovieDetails";
import Navigation from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />{" "}
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/person/:id" element={<PersonPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
