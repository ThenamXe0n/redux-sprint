import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../ui/MovieCard";

const MovieCardSection = () => {
  let movieDataList = useSelector((state) => state.movies.allMovies);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.isArray(movieDataList) &&
        movieDataList.length >= 1 &&
        movieDataList.map((movie, idx) => (
          <MovieCard
            key={idx}
            movieName={movie.movieName}
            moviePoster={movie.poster}
          />
        ))}
    </div>
  );
};

export default MovieCardSection;
