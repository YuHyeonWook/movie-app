/*
 * main page
 */
import { Component } from "../core/wook";
import HeadLine from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";

export default class Home extends Component {
  render() {
    const headline = new HeadLine().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movieListMore = new MovieListMore().el;

    this.el.classList.add("container");
    this.el.append(headline, search, movieList, movieListMore);
  }
}

/* 이전의 렌더부분이 위처럼 바뀜 */
// render() {
// this.el.innerHTML = `
//         <h1> hello !!!!!1</h1>`;
// }
