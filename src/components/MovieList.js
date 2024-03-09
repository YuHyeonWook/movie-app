import { Component } from "../core/wook";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
  }
  render() {
    // movie-list클래스명 추가
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
    <div class="movies"></div>
    <div class='the-loader hide'></div>
    `;

    const movieEl = this.el.querySelector(".movies");
    movieEl.append(
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie,
          }).el
      )
    );
    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}
