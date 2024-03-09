// 영화 리스트 안에 '더보기' 버튼 만들기

import { Component } from "../core/wook";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove("hide")
        : this.el.classList.add("hide");
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hid");
    this.el.textContent = "View more...";

    this.el.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
