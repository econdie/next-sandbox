import React, { Component } from "react";
import Link from "next/link";
import Page from "../layouts/main";

class Index extends Component {
  render() {
    return (
      <Page>
        <div>Welcome to my sandbox</div>
        <div>
          <Link href="/lazyloading">
            <a>
              Lazyloading with fade animations (react-lazyload and
              react-transition-group)
            </a>
          </Link>
        </div>
        <div>
          <Link href="/morphs">
            <a>Morph animations (react-spring)</a>
          </Link>
        </div>
        <div>
          <Link href="/springy">
            <a>Spring animations (react-spring)</a>
          </Link>
        </div>
      </Page>
    );
  }
}

export default Index;
