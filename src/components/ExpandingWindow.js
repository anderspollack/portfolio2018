import React, { Component } from 'react';
import Media from 'react-media';
import './ExpandingWindow.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const classNames = require('classnames');

export default class ExpandingWindow extends Component {
  constructor(props) {
    super(props);
    const expanding = this.props.expanding;
    this.state = {
      animated: true,
      expanded: expanding ? false : true,
      expanding: expanding,
    };
    this.scroller = React.createRef();
  }
  
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  
  expandWindow = () => {
    if (this.props.expanding) {
      if (this.state.expanded) {
        scroll.scrollToTop({
          smooth: true,
          duration: 200,
        });
      }
      this.setState({
      expanded: !this.state.expanded,
      });
    }
  }
  
  render() {
    const expanded = this.state.expanded;
    const expanding = this.props.expanding;
    const classList = classNames(
      { 'ExpandingWindow': true },
      { 'animated': this.state.animated },
      { 'expanded': expanded },
    )
    return (
      <div>
          <div className="titleBar"></div>
          <div
            className={ classList }
            onClick={ this.expandWindow }
            ref={ this.scroller }>
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
          { expanding &&
            <ScrollText expanded={ this.state.expanded } />
          }
      </div>
    );
  }
}

class ScrollText extends Component {
  render() {
    const expanded = this.props.expanded;
    const classList = classNames(
      { 'ScrollText': true },
      { 'expanded' : expanded }
    );
    const scrollText = expanded ? (
      <div className={ classList }>&larr;&nbsp;collapse</div>
    ) : (
      <div className={ classList }>expand&nbsp;&rarr;</div>
    );
    return scrollText;
  }
}
