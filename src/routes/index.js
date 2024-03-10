import { Component, createRouter } from "../core/wook";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movieDetail", component: MovieDetail },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound },
]);
