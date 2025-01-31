import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import Navigation from "./common/Navigation";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <MoviesPage />
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/" element={<PeoplePage />} />
          <Route path="/person/:id" element={<PersonPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
