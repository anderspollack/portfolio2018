import React, { Component } from 'react';
import './World.css';
const classNames = require('classnames');

export default class World extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      expanded: this.props.expanded,
      fadeIn: false,
    });
    this.element = React.createRef();
  }

  onClick = () => {
    this.props.onClick(this.props.location, this.props.history);
  }

  handleIntroClick = (event) => {
    event.cancelBubble = true;
    if (event.stopPropagation) {
      event.stopPropagation(); 
    }
    return false;
  }

  render() {
    const pathname = this.props.location.pathname;
    const isHome = pathname === '/';
    const isProjects = pathname === '/projects';
    const isProjectPage = pathname.includes('/projects/');
    const expanded = this.props.expanded || isHome;
    const worldClasses = classNames(
      { 'World': true },
      { 'collapsed': !this.props.expanded && isProjects },
      { 'expanded': expanded },
      { 'shortened': isProjectPage && !this.props.expanded },
    );
    const nbsp = (<span>&nbsp;</span>);
    const space = (<span> </span>);
    return (
      <div className={ worldClasses }>
          <div className="clickableArea" onClick={ this.onClick }></div>
          <div className="Icon-world" onClick={ this.onClick }></div>
          <div className="text">
              <div className="tunnel"></div>
              <h1 onClick={ this.onClick }>Anders{ window.innerWidth >= 400 ? nbsp : space }Pollack</h1>
              { expanded && (
                  <div className="latin" onClick={ this.onClick }>
                      <h2 className="orbis">orbis</h2>
                      <h2 className="sensualium">sensualium</h2>
                      <h2 className="pictus">pictus</h2>
                      <div className="Icon-world animated"></div>
                      <div className="Wireframe-world"></div>
                      <div className="intro" onClick={ this.handleIntroClick }>
                          {/* <marquee scrolldelay="120"><p>tap or click anywhere to see inside</p></marquee> */}
                          <p>Hi I'm Anders</p>
                          <p>I design websites and documents for&nbsp;people</p>
                          <p>I make music and images, and I am on the computer a&nbsp;lot</p>
                          <p>You can contact me at:
                              <a href="mailto:pollack.anders@gmail.com">
                                  pollack.anders@gmail.com
                              </a>
                          </p>
                      </div>
                  </div>
              )}
          </div>
      </div>
    );
  }
}
