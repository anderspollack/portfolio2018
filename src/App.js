import React, { Component } from 'react';
import './App.css';
const classNames = require('classnames');
const data = {
  collections: [
    {
      id: 0,
      heading: 'The Chicago Council on Science and Technology',
      body: 'Graphic design and web development for a science outreach nonprofit organization',
      icon: 'Icon-folder',
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
      id: 1,
      heading: 'Tuition.io',
      body: 'UX and brand collateral for a student loan repayment benefit platform',
      projects: [],
    },
    {
      id: 2,
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
  onClick = (e) => {
    this.props.onClick(e)
  }
  
  render() {
    const classList = classNames(
      { 'World': true },
      { 'expanded': this.props.expanded }
    );
    return (
      <div
       className={ classList }
       onClick={ this.onClick }  
      ></div>
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
  constructor(props) {
    super(props);
    /*     this.select = this.select.bind(this); */
    this.state = {
      expanded: false,
    };
  }

  handleClick = (e) => {
    this.props.handleClick(this.props.id.toString());
  }

  render() {
    const classList = classNames(
      'Project',
      { 'selected': this.state.expanded },
    );
    
    return (
      <li
       className={ classList }
       key={ this.props.id }
       onClick={ this.handleClick }>
	  <h5>{ this.props.name }</h5>
	  <TagList tags={ this.props.tags } />
      </li>
    );
  }
}

class ProjectList extends Component {
  handleClick = (e) => {
    this.props.handleClick(e);
  }
  
  render() {
    const projects = this.props.projects.map(project => {
      return (
	<Project
	 key={ project.id }
	 id={ project.id }
	 name={ project.name }
	 tags={ project.tags }
	 handleClick={ this.handleClick }
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

class CollectionButton extends Component {
  onClick = (e) => {
    this.props.onClick(e);
  }
  
  render() {
    const icon = this.props.icon ? this.props.icon : 'Icon-folder';
    return (
      <div
       className={classNames( icon, 'CollectionButton' )}
       onClick={ this.onClick }
       id={ this.props.id }></div>
    );
  }
}

function Excerpt(props) {
  return (
    <div className="excerpt">
	<h3>{ props.heading }</h3>
	<p>{ props.body }</p>
    </div>
  );
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
    };
  }
  
  handleExpand = (e) => {
    if (!this.state.expanded) {
      this.props.onExpand(e);
      this.setState({
	expanded: true,
      });
    }
  }

  handleCollapse = (e) => {
    this.props.onCollapse(e);
    this.setState({
      expanded: false,
    });
  }
  
  handleProjectClick = (e) => {
    this.props.onProjectSelect([this.props.id.toString(), e]);
  }
  
  render() {
    const expanded = this.state.expanded;
    const classList = classNames(
      {'Card': true},
      {'expanded': expanded });
    return (
      <li
       className={ classList }
       onClick={ this.handleExpand }
       id={ this.props.id }
      >
	  <Excerpt
	   heading={ this.props.heading }
	   body={ this.props.body }
	  />
	  { expanded &&
	    <div>
		<ProjectList
		 projects={ this.props.projects }
  		 handleClick={ this.handleProjectClick }
		/>
		<CollectionButton
		 icon={ this.props.icon }
		 onClick={ this.handleCollapse }
		 id={ this.props.id }
		/>
	    </div>
	  }
      </li>
    )
  }
}

function DataHeading(props) {
  return (
    <div className="DataHeading">
	<h2>{ props.heading }</h2>
    </div>
  );
}

class Container extends Component {
  componentWillUnmount() {
    console.log('Unmounting!');
  }

  render() {
    return (
      <div className="Container">
	  { this.props.children }
      </div>
    );
  }
}

class ProjectView extends Component {
  render() {
    const project = this.props.projects[this.props.selectedProject[0]][this.props.selectedProject[1]];
    console.log(project);
    return (
      <div className="ProjectView">
	  <div className="PreviousButton"><span className="text" >Previous</span></div>
	  <div className="NextButton"><span className="text" >Next</span></div>
	  <div className="ProjectPage">

	      <h2>{ project.name }</h2>
	      
	      <p>Augue eget arcu dictum varius duis at consectetur lorem donec massa sapien, faucibus et molestie. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.</p>
	      <p>Quam id leo in vitae turpis massa sed elementum! Scelerisque in dictum non, consectetur a erat nam at lectus urna duis convallis convallis tellus, id interdum velit laoreet id donec.</p>
	      <p>Pulvinar pellentesque habitant morbi tristique senectus. Lectus a molestie lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus!</p>
	      <p>Eu turpis egestas pretium aenean pharetra? Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.</p>
	      <p>Nunc vel risus commodo viverra maecenas accumsan, lacus? Id interdum velit laoreet id donec ultrices tincidunt arcu, non sodales neque sodales ut etiam sit amet nisl purus, in mollis nunc!</p>
	      <p>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros.</p>
	      <p>Vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Semper risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor.</p>
	      <p>Gravida hendrerit lectus a molestie lorem? Eget gravida cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo.</p>
	      <p>Maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean! Bibendum ut tristique et, egestas quis ipsum suspendisse ultrices gravida dictum.</p>
	  </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionListExpanded: true,
      projectViewEnabled: false,
      worldExpanded: true,
      selectedProject: [],
      expandedCards: [],
      collections: data.collections,
      projects: data.collections.map(collection => collection.projects)//.reduce((acc, val) => acc.concat(val), []),
    };
  }

  handleCardExpand = (e) => {
    const id = e.target.id.toString();
    const expandedCards = this.state.expandedCards.concat(id);
    this.setState({
      expandedCards: expandedCards,
    });
  }

  handleCardCollapse = (e) => {
    const id = e.target.id.toString();
    const expandedCards = this.state.expandedCards.filter(card => card !== id);
    this.setState({
      expandedCards: expandedCards,
    });
  }

  handleProjectSelect = (idPair) => {
    this.setState({
      selectedProject: idPair,
      collectionListExpanded: false,
      projectViewEnabled: true,
      worldExpanded: false,
    });
  }

  handleCollectionListExpand = () => {
    this.setState({
      collectionListExpanded: true,
      projectViewEnabled: false,
      worldExpanded: true,
    });
  }

  render() {
    const cards = this.state.collections.map(card => {
      const classList = classNames(
	{ 'Card': true },
	{ 'expanded': card.expanded },
      );
      const expanded = this.state.expandedCards.includes(card.id.toString());
      return (
	<Card
	 key={ card.id }
	 id={ card.id.toString() }
	 classList={ classList }
	 expanded={ expanded }
	 heading={ card.heading }
	 body={ card.body }
	 projects={ card.projects }
	 icon={ card.icon }
	 onExpand={ this.handleCardExpand }
	 onCollapse={ this.handleCardCollapse }
	 onProjectSelect={ this.handleProjectSelect }
	/> 
      );
    });
    return (
      <div className="App">
	  <World expanded={ this.state.worldExpanded } onClick={ this.handleCollectionListExpand } />
	  { this.state.collectionListExpanded &&
	    <Container>
		<Moon />
		<DataHeading heading="Recent Work" />
		<ul className="CardList">
		    { cards }
		</ul>
		<div className="Shadow"></div>
	    </Container>
	  }
	  { this.state.projectViewEnabled &&
	    <ProjectView
	     selectedProject={ this.state.selectedProject }
	     projects= { this.state.projects }
	    />
	  }
      </div>
    );
  }
}

export default App;
