import { Component } from "../core/wook";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    const { github, respository } = aboutStore.state;
    this.el.innerHTML = /*HTML */ `
    <div>
        <a href="${respository}">GitHub Repository</a>
    </div>
    <div>
        <a href="${github}"> ${new Date().getFullYear()}YuHyeonWook</a>
    </div>
    `;
  }
}
