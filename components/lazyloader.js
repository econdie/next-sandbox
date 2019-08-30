import { Component } from "react";
import LazyLoad from "react-lazyload";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Lazyloader extends Component {
  render() {
    const height = this.props.height ? this.props.height : 200;
    const img = this.props.img ? this.props.img : false;
    const text = this.props.text ? this.props.text : false;
    return (
      <LazyLoad height={height} once>
        {img ? (
          <TransitionGroup>
            <CSSTransition appear={true} timeout={500} classNames="faded">
              <img src={this.props.img} />
            </CSSTransition>
          </TransitionGroup>
        ) : null}
        {text ? <p>{text}</p> : null}
      </LazyLoad>
    );
  }
}

export default Lazyloader;
