import React, { Component } from 'react';
import Media from 'react-media';
import './ScrollingWindow.css';
const classNames = require('classnames');

export default class ScrollingWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
    };
  }

  componentDidMount() {
    this.scroller.focus()
    /*     this.element.current.scrollTop = 0; */
  }

  focus
  focus = () => {
    console.log('focused');
    this.scroller.focus();
    /*     this.element.current.focus(); */
    this.setState({
    });
  }

  render() {
    const classList = classNames(
      { 'ScrollingWindow': true },
      { 'animated': this.state.animated },
    )
    return (
      <div>
          <div className="titleBar"></div>
          <div className="scrollText">&larr;&nbsp;scroll&nbsp;&rarr;</div>
          <div
            className={ classList }
            onMouseOver={ this.focus }
            onTouchStart={ this.focus }
            ref={ (img) => this.scroller = img }>
              <Media query={{ maxWidth: 567 }}>
                  {matches =>
                    matches ? (
                      <img alt={ this.props.alt } src={ this.props.mobileImg }/>
                    ) : (
                      <img alt={ this.props.alt } src={ this.props.desktopImg }/>
                    )
                  }
              </Media>
          </div>
      </div>
    );
  }
}
