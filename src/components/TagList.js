import React, { Component } from 'react';
import './TagList.css'

export default class TagList extends Component {
  render() {
    const tags = this.props.tags.map(tag => <li key={ tag } className={ tag }></li>);
    return (
      <ul className="TagList">{ tags }</ul>
    );
  }
}
