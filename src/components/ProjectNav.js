import React, { Component } from 'react';
import './ProjectNav.css';
import Card from './Card'
const classNames = require('classnames');

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      expandedCards: this.props.expandedCards,
      collections: this.props.collections,
      projects: this.props.projects,
      exit: false,
      fadeIn: false,
    });
  }

  componentDidMount() {
    this.setState({
      fadeIn: true,
    });
  }

  componentWillUnmount() {
    this.setState(() => ({
      exit: true,
    }), () => this.props.onChange(this.state.expandedCards));
  }

  handleChange = (id, expanded) => {
    const expandedCards = expanded ? (
      this.state.expandedCards.concat(id)
    ) : (
      this.state.expandedCards.filter(card => card !== id)
    );
    this.setState({
      expandedCards: expandedCards,
    }, () => this.props.onChange(expandedCards));
  }

  handleProjectSelect = (projectName) => {
    this.props.onProjectSelect(projectName, this.props.history);
  }

  render() {
    const navClasses = classNames(
      { 'ProjectNav': true },
      { 'fadeIn': this.state.fadeIn },
      { 'projectPage': this.props.location.pathname.includes('/projects/') },
      { 'slideOut': this.props.worldExpanded },
      { 'exit': this.state.exit },
    );
    const cards = this.props.collections.map(card => {
      const expanded = this.state.expandedCards.includes(card.id);
      const cardClasses = classNames(
	{ 'Card': true },
	{ 'expanded': expanded },
      );
      return (
	<Card
	  key={ card.id }
	  id={ card.id }
	  className={ cardClasses }
	  expanded={ expanded }
	  heading={ card.heading }
	  body={ card.body }
	  projects={ card.projects }
	  icon={ card.icon }
	  onProjectSelect={ this.handleProjectSelect }
          onChange={ this.handleChange }
	/> 
      );
    });
    
    return (
      <div className={ navClasses }>
          {/* 	  <Moon /> */}
          <DataHeading heading="Recent Work" />
	  <ul className="CardList">
              { cards }
          </ul>
          {/*           <div className="Shadow"></div> */}
      </div>
    );
  }
}

export default ProjectNav;

function Moon(props) {
  return (
    <div className="Moon"></div>
  );
}

function DataHeading(props) {
  return (
    <div className="DataHeading">
	<h2>{ props.heading }</h2>
    </div>
  );
}
