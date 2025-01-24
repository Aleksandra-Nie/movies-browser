import MovieDetails from "./features/movies/MovieDetails";
import MoviesContainer from "./features/movies/MoviesContainer";
import IntroductionLayer from "./features/movies/MovieDetails/IntroductionLayer";

function App() {
  return (
    <div>
      <MoviesContainer />
      <IntroductionLayer />
      <MovieDetails />
    </div>
  );
}

export default App;
