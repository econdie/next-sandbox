import { Component } from "react";
import Lazyloader from "../components/lazyloader";
import Page from "../layouts/main";

class Lazyloading extends Component {
  render() {
    return (
      <Page>
        <Lazyloader height="300" img="/static/img/img1.jpg" />
        <br />
        <Lazyloader img="/static/img/img2.jpeg" />
        <br />
        <Lazyloader img="/static/img/img3.jpeg" />
        <br />
        <Lazyloader img="/static/img/img4.jpeg" />
        <br />
        <Lazyloader img="/static/img/img5.jpeg" />
        <br />
        <Lazyloader img="/static/img/img6.jpg" />
        <br />
        <Lazyloader text="Sample text lazyloading" />
        <br />
        <Lazyloader height="300" img="/static/img/img1.jpg" />
        <br />
        <Lazyloader img="/static/img/img2.jpeg" />
        <br />
        <Lazyloader img="/static/img/img3.jpeg" />
        <br />
        <Lazyloader img="/static/img/img4.jpeg" />
        <br />
        <Lazyloader img="/static/img/img5.jpeg" />
        <br />
        <Lazyloader img="/static/img/img6.jpg" />
        <br />
        <Lazyloader text="Sample text lazyloading" />
        <br />
        <Lazyloader height="300" img="/static/img/img1.jpg" />
        <br />
        <Lazyloader img="/static/img/img2.jpeg" />
        <br />
        <Lazyloader img="/static/img/img3.jpeg" />
        <br />
        <Lazyloader img="/static/img/img4.jpeg" />
        <br />
        <Lazyloader img="/static/img/img5.jpeg" />
        <br />
        <Lazyloader img="/static/img/img6.jpg" />
        <br />
        <Lazyloader text="Sample text lazyloading" />
        <br />
      </Page>
    );
  }
}

export default Lazyloading;
