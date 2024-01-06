import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { TVDetails } from "./pages/TVDetails/TVDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movies/:id",
    element: <MovieDetails />,
  },
  {
    path: "series/:id",
    element: <TVDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
