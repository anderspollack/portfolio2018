import React, { Component } from 'react';
import './App.css';

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
      <div className="browser-window-mobile">
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

class Container extends Component {
  render() {
    return (
      <div className="Container">
	  <div className="Lid"></div>
	  <DataHeading />
	  <Card />
      </div>
    );
  }
}

class DataHeading extends Component {
  render() {
    return (
      <div className="DataHeading">
	  <h2>Recent Work</h2>
      </div>
    )
  }
}

class Card extends Component {
  render() {
    return (
      <div className="Card">
	  <h3>The Chicago Council on Science and Technology</h3>
	  <p>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis! Et ligula ullamcorper malesuada proin libero nunc, consequat interdum varius sit amet, mattis vulputate enim nulla aliquet porttitor lacus?</p>
	  <p>Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet. Auctor neque, vitae tempus quam pellentesque nec nam aliquam.</p>
	  <p>Quam pellentesque nec nam aliquam sem et. Non tellus orci, ac auctor augue mauris augue neque, gravida in fermentum et, sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu?</p>
	  <p>Ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis?</p>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque habitant. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus.</p>
	  <p>Aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi, quis eleifend quam adipiscing. In hendrerit gravida rutrum quisque non tellus orci, ac.</p>
	  <p>Augue ut lectus arcu, bibendum at varius vel, pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi!</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
	  <div className="Sea"></div>
	  <World />
	  <div className="Mask">
	      <Container />
	  </div>
	  
      </div>
    );
  }
}

export default App;
