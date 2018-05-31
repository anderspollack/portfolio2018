import React, { Component } from 'react';
import './App.css';
const classNames = require('classnames');

class Scroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      height: 1154,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.scroll(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  scroll() {
    this.setState({
      position: this.state.position <= this.state.height - 166 ? this.state.position + 1 : 0,
    });
  }
    
  render() {
    return (
      <div
       className="browser-window-mobile">
	  <a
	   href="http://dev.c2st.org/"
	   target="_blank" rel="noopener noreferrer">
	  <img 
	   className="browser-window-background"
	   src={require('./img/phone-window-medium.png')}
	   srcSet={`
${require('./img/phone-window-small.png')} 1x, 
${require('./img/phone-window-medium.png')} 2x,
${require('./img/phone-window-large.png')} 3x`}
	   width="96" 
	   height="177" 
	   alt="" 
	  />
	  </a>
          <div className="img-wrap" style={{
	    backgroundPosition: `0 -${this.state.position}px`,
	  }}>
	      
          </div>
      </div>
      
    )
  }
}

class World extends Component {
  render() {
    return (
      <div className="World"></div>
    );
  }
}

class Moon extends Component {
  render() {
    return (
      <div className="Moon"></div>
    );
  }
}

class Card extends Component {
  render() {
    let ClassList = classNames(
      'Card',
      'Button',
    );
    return (
      <a href="#" className={ClassList}>
      <h3>{ this.props.heading }</h3>
      <p>{ this.props.body }</p>
      </a>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
	  <div className="Sea"></div>
	  <World />
	  <div className="Container">
	      <div className="DataHeading">
		  <h2>Recent Work</h2>
	      </div>
	      <Card
	       heading="The Chicago Council on Science and Technology"
	       body="Graphic design and web development for a science outreach nonprofit organization"
	      />
	      <Card
	       heading="Tuition.io"
	       body="UX and brand collateral for a student loan repayment benefit platform"
	      />
	      <Card
	       heading="Museum in Trust"
	       body="Web design and development for Chicago artist Don Pollack "
	      />


	  </div>
	  <Moon />
      </div>
    );
  }
}

export default App;
