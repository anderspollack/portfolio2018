import React from 'react';
import TagList from '../components/TagList';

const C2STProgramming = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <p>Print material for C2ST fundraisers, lectures, and outreach.</p>
      <div className="divider"></div>
      <h2>Science in the City Annual Gala 2015 &ndash; 2018</h2>
      <h2>Selected Event Graphics</h2>
      <h2>Custom Email templates</h2>
  </article>
);

export default C2STProgramming;
