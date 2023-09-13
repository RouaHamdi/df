import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Description for Movie 1",
      posterURL: "URL_TO_POSTER_1",
      rating: 4,
    },
    {
      title: "Movie 2",
      description: "Description for Movie 2",
      posterURL: "URL_TO_POSTER_2",
      rating: 3.8,
    },
    const [date, setDate ] = useState(newDate());
    useEffect(()=>{
      setDate(new Date());
    },
    {
      title: "Movie 3",
      description: "Description for Movie 2",
      posterURL: "URL_TO_POSTER_2",
      rating: 4.9,
    },
    // Add more movies here
  ]);

  const [filters, setFilters] = useState({ title: "", rating: "" });

  const handleFilterChange = (newFilter) => {
    setFilters({ ...filters, ...newFilter });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === "" || movie.rating >= parseFloat(filters.rating))
    );
  });

  const handleAddMovie = () => {

  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default App;
