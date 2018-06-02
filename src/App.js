import React, { Component } from 'react';
import './App.css';
const classNames = require('classnames');
const data = {
  collections: [
    {
      id: 'a',
      heading: 'The Chicago Council on Science and Technology',
      body: 'Graphic design and web development for a science outreach nonprofit organization',
      projects: [
	{
	  id: 0,
	  name: 'C2ST.org Website',
	  tags: ['Icon-ux', 'Icon-code'],
	},
	{
	  id: 1,
	  name: 'C2ST Annual Gala 2015 - 2018',
	  tags: ['Icon-graphic'],
	},
      ],
    },
    {
      id: 'b',
      heading: 'Tuition.io',
      body: 'UX and brand collateral for a student loan repayment benefit platform',
      projects: [],
    },
    {
      id: 'c',
      heading: 'Museum in Trust',
      body: 'Web design and development for Chicago artist Don Pollack',
      projects: [],
    },
  ],
};

/* class Scroller extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       position: 0,
 *       height: 1154,
 *     }
 *   }
 * 
 *   componentDidMount() {
 *     this.timerID = setInterval(
 *       () => this.scroll(),
 *       100
 *     );
 *   }
 * 
 *   componentWillUnmount() {
 *     clearInterval(this.timerID);
 *   }
 * 
 *   scroll() {
 *     this.setState({
 *       position: this.state.position <= this.state.height - 166 ? this.state.position + 1 : 0,
 *     });
 *   }
 *     
 *   render() {
 *     return (
 *       <div
 *        className="browser-window-mobile">
 * 	  <a
 * 	   href="http://dev.c2st.org/"
 * 	   target="_blank" rel="noopener noreferrer">
 * 	  <img 
 * 	   className="browser-window-background"
 * 	   src={require('./img/phone-window-medium.png')}
 * 	   srcSet={`
 * ${require('./img/phone-window-small.png')} 1x, 
 * ${require('./img/phone-window-medium.png')} 2x,
 * ${require('./img/phone-window-large.png')} 3x`}
 * 	   width="96" 
 * 	   height="177" 
 * 	   alt="" 
 * 	  />
 * 	  </a>
 *           <div className="img-wrap" style={{
 * 	    backgroundPosition: `0 -${this.state.position}px`,
 * 	  }}>
 * 	      
 *           </div>
 *       </div>
 *       
 *     )
 *   }
 * } */

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

class TagList extends Component {
  render() {
    const tags = this.props.tags.map(tag => <li key={ tag } className={ tag }></li>);
    return (
      <ul className="TagList">{ tags }</ul>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <li className="Project" key={ this.props.id }>
	  <h5>{ this.props.name }</h5>
	  <TagList tags={ this.props.tags } />
      </li>
    );
  }
}

class ProjectList extends Component {
  render() {
    const projects = this.props.projects.map(project => {
      return (
	<Project
	 key={ project.id }
	 id={ project.id }
	 name={ project.name }
	 tags={ project.tags }
	/>
      ); 
    });
    return (
      <div className="ProjectList">
	  <h4>Projects</h4>  
	  <ul>{	projects }</ul>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.state = {
      expanded: false,
    };
  }

  expand() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  
  render() {
    const classList = classNames(
      'Card',
      'Button',
      { 'Expanded': this.state.expanded },
    );
    return (
      <li>
	  <a
	   href="#"
	   className={ classList }
	   onClick={ this.expand }>
	      <div className="excerpt">
		  <h3>{ this.props.heading }</h3>
		  <p>{ this.props.body }</p>
	      </div>
	      <ProjectList projects={ this.props.projects } />
	  </a>
      </li>
    )
  }
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data.collections,
    }
  }
  
  render() {
    const cards = this.state.cards.map(card => {
      return (
	<Card
	 key={ card.id }
	 id={ card.id }
	 heading={ card.heading }
	 body={ card.body }
	 projects={ card.projects }
	/> 
      );
    });
    
    return (
      <div className="Container">
	  <div className="DataHeading">
	      <h2>Recent Work</h2>
	  </div>
	  <ul>{ cards }</ul>
	  <Moon />
	  <div className="Shadow"></div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
	  <World />
	  <Container />
      </div>
    );
  }
}

export default App;
