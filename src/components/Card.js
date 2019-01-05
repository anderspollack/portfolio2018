import React, { Component } from 'react';
import './Card.css';
import Project from './Project'
import TagList from './TagList'
const classNames = require('classnames');

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
    };
  }
  
  handleExpand = () => {
    if (!this.state.expanded) {
      this.setState({
	expanded: true,
      }, () => this.handleChange());
    }
  }

  handleCollapse = () => {
    this.setState({
      expanded: false,
    }, () => this.handleChange());
  }
  
  handleChange = () => {
    this.props.onChange(this.props.id, this.state.expanded);
  }
  
  handleProjectClick = (projectName) => {
    this.props.onProjectSelect(projectName);
  }
  
  render() {
    const expanded = this.state.expanded;
    const classList = classNames(
      {'Card': true},
      {'expanded': expanded });
    const tags = this.props.projects.map(project => project.tags).reduce((prev, current) => prev.concat(current))
                     .sort()
                     .filter((value, index, self) => self.indexOf(value) === index);
    const expansion = expanded ? (
      <div>
	  <ProjectList
	    projects={ this.props.projects }
  	    onProjectSelect={ this.handleProjectClick }
	  />
	  <CollectionButton
	    icon={ this.props.icon }
	    id={ this.props.id }
            onClick={ this.handleCollapse }
	  />
      </div>
    ) : null;
    return (
      <li
        className={ classList }
        onClick={ this.handleExpand }
        id={ this.props.id }
      >
	  <Excerpt
	    heading={ this.props.heading }
	    body={ this.props.body }
            onClick={ this.handleCollapse }
	  />
          <TagList tags={ tags }/>
	  { expansion }
          <div
            className={ classNames(
                {'cancel': true},
            ) }
            onClick={ this.handleCollapse }
          ></div>
      </li>
    )
  }
}

export default Card;

class CollectionButton extends Component {
  onClick = (e) => {
    this.props.onClick(e);
  }
  
  render() {
    const icon = this.props.icon ? this.props.icon : 'Icon-folder';
    return (
      <div
       className={classNames( icon, 'CollectionButton' )}
       onClick={ this.onClick }></div>
    );
  }
}

class Excerpt extends Component {
  onClick = (e) => {
    this.props.onClick(e);
  }

  render() {
    const heading = this.props.heading.split(' ');
    const headingNoWidows = (
      <h3>{
        heading.slice(0, heading.length - 1).join(' ') }&nbsp;{ heading[heading.length - 1] }
      </h3>
    );
    const headingShort = (
      <h3>{ this.props.heading }</h3>
    )
    const headerTag = heading.length <= 1 ? headingShort : headingNoWidows; 
    const body = this.props.body.split(' ');
    return (
      <div className="excerpt" onClick={ this.onClick }>
	  { headerTag }
	  <p>{ body.slice(0, body.length - 1).join(' ') }&nbsp;{ body[body.length - 1] }</p>
      </div>
    );
  }
}

class ProjectList extends Component {
  handleProjectSelect = (projectName) => {
    this.props.onProjectSelect(projectName);
  }
  
  render() {
    const projects = this.props.projects.map(project => {
      return (
	<Project
	 key={ project.id }
	 id={ project.id }
	 title={ project.title }
	 tags={ project.tags }
	 onProjectSelect={ this.handleProjectSelect }/>
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
