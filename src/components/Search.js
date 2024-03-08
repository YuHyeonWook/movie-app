import { Component } from "../core/wook";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `

    <input placeholder="Enter the movie title to search!" />
    <button class="btn btn-primary">search</button>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      // 검색어를 입력하면
      movieStore.state.searchText = inputEl.value;
    });

    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        // 엔터키를 누르면 내용을 검색한다.
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
