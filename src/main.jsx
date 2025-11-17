import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import NavBar from "./components/NavBar.jsx";
import TodoTable from "./components/tables/TodoTable.jsx";
import TodoPage from "./pages/TodoPage.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <App />
        <Toaster />
        <TodoPage/>
      </BrowserRouter>
    </Provider>
  // </StrictMode>
);
