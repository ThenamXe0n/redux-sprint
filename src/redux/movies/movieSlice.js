import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import axiosInstance from "../../services/axiosInstance";

let initialState = {
  allMovies: [],
  selectedMovie: null,
  isLoading: false,
  status: null,
  error:""
};

export const setMovieListAsync = createAsyncThunk("movies/set MovieList", async () => {
  // let response = await axiosInstance.get("/movie")
  // return response.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.allMovies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setMovieListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setMovieListAsync.fulfilled, (state, action) => {
        state.allMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(setMovieListAsync.rejected, (state, action) => {
        state.isLoading = false;
        alert("something went wrong,failed to fetch data");
      });
  },

  //   extraReducers: {},
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
