import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { pagePaths } from "./routes/pagePaths";
import TodoPage from "./pages/TodoPage";

import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMovieListAsync } from "./redux/movies/movieSlice";
import ExampleForm from "./components/forms/ExampleForm";
import Loader from "./components/ui/Loader";
const MoviePage = lazy(() => import("./pages/MoviePage"));

function App() {
  const dispatch = useDispatch();
  let isLoading = useSelector((state) => state?.movies?.isLoading);
  console.log("render");
  useEffect(() => {
    dispatch(setMovieListAsync());
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <section className="h-full w-full flex items-center justify-center">
            <h1 className="text-6xl font-bold text-red-500 animate-pulse">
              ... LOADING
            </h1>
          </section>
        }
      >
        {isLoading && (
          <section className="h-screen w-screen flex items-center justify-center bg-white fixed top-0 left-0 z-50">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>
              </div>
            </div>
          </section>
        )}
        <Routes>
          <Route path={"/controlled"} element={<ExampleForm />} />
          <Route path={pagePaths.home} element={<h1>This is home page</h1>} />
          <Route path={pagePaths.todo} element={<TodoPage />} />
          <Route path={pagePaths.movie} element={<MoviePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
