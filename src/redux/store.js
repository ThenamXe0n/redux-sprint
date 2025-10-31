import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movies/movieSlice";
import UserReducer from "./user/userSlice";
import SubsReducer from "./subscriptionSlice"

const store = configureStore({
  reducer: {
    movies: MovieReducer,
    user: UserReducer,
    subscription:SubsReducer
  },
});

export default store;
