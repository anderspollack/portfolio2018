import React, { Component } from 'react';
import TagList from './TagList';
import './Project.css';
const classNames = require('classnames');

export default class Project extends Component {
  constructor(props) {
    super(props);
    /*     this.select = this.select.bind(this); */
    this.state = {
      expanded: false,
    };
  }

  handleClick = () => {
    this.props.onProjectSelect(this.props.id);
  }

  render() {
    const classList = classNames(
      'Project',
      { 'selected': this.state.expanded },
    );
    
    const title = this.props.title.split(' ');
    return (
      <li className={ classList }
       key={ this.props.id }
       onClick={ this.handleClick }>
          <h5>{ title.slice(0, title.length - 1).join(' ') }&nbsp;{ title[title.length - 1] }</h5>
          <TagList tags={ this.props.tags.sort() }/>
      </li>
    );
  }
}
/* 
 * export class TagList extends Component {
 *   render() {
 *     const tags = this.props.tags.map(tag => <li key={ tag } className={ tag }></li>);
 *     return (
 *       <ul className="TagList">{ tags }</ul>
 *     );
 *   }
 * } */
