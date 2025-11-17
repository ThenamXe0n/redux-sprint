import React from "react";
import AddMovieForm from "../components/forms/AddMovieForm";
import MovieCardSection from "../components/section/MovieCardSection";

const MoviePage = () => {
  return (
    <div>
      <section className="flex bg-[#d1e6ff] h-screen w-screen ">
        <div className="flex-1">
          <AddMovieForm />
        </div>
        <div className="min-w-[70%] p-5">
          <MovieCardSection/>
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
