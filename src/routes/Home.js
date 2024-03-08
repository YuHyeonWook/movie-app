/*
 * main page
 */
import { Component } from "../core/wook";
import HeadLine from "../components/Headline";
import Search from "../components/Search";

export default class Home extends Component {
  render() {
    const headline = new HeadLine().el;
    const search = new Search().el;

    this.el.classList.add("container");
    this.el.append(headline, search);
  }
}

/* 이전의 렌더부분이 위처럼 바뀜 */
// render() {
// this.el.innerHTML = `
//         <h1> hello !!!!!1</h1>`;
// }
