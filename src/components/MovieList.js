import { Component } from "../core/wook";
import movieStore from "../store/movie";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }
  render() {
    // movie-list클래스명 추가
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
    <div class="movies"></div>`;

    const movieEl = this.el.querySelector(".movies");
    movieEl.append(
      movieStore.state.movies.map((movie) => {
        return movie.Title;
      })
    );
  }
}
