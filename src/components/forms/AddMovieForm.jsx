import React, { useState, useRef } from "react";
import "./todoForm.css";
import { addTaskToTodoList } from "../../redux/todo/todoSlice";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/movies/movieSlice";
import axios from "axios";
import toast from "react-hot-toast";

const AddMovieForm = () => {
  const dispatch = useDispatch();
  const [movie, setmovie] = useState("");
  const [moviePoster, setmoviePoster] = useState("");
  const movieInputRef = useRef();
  const moviePosterInputRef = useRef();
  async function handleForm(e) {
    e.preventDefault();
    console.log("movie", movie);

    let data = {
      id: Date.now(),
      movieName: movie,
      poster: moviePoster,
      createdAt: new Date().toDateString(),
    };

    console.log(data);

    dispatch(addMovie(data));
    // post movie data to api
    try {
      let res = await axios.post("http://localhost:8080/movie", data);
      toast.success("movie added successfully");
    } catch (error) {
      toast.error(error.message);
    }

    setmovie("");
    setmoviePoster("");
    movieInputRef.current.value = "";
    moviePosterInputRef.current.value = "";
  }
  return (
    <>
      <div className="container">
        <div className="heading ">Add Movie </div>
        <p className="text-center text-pink-600">Add movie details below</p>
        <form onSubmit={handleForm} className="form">
          <input
            ref={movieInputRef}
            required=""
            className="input"
            type="text"
            onChange={(e) => {
              setmovie(e.target.value);
            }}
            name="name"
            id="name"
            placeholder="Enter a movie name"
          />
          <input
            ref={moviePosterInputRef}
            required=""
            className="input"
            type="url"
            onChange={(e) => {
              setmoviePoster(e.target.value);
            }}
            name="url"
            id="url"
            placeholder="Enter a movie poster url"
          />

          <button className="login-button  items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add movie
          </button>
        </form>
        <div className="social-account-container"></div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </>
  );
};

export default AddMovieForm;
