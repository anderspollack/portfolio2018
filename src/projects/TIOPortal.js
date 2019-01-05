import React from 'react';
import TagList from '../components/TagList';

const TIOPortal = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <p>Product screens for Tuition.io Student Loan Wellness Tools. These resources aim to help employees optimize loan payoff, navigate repayment strategies, and learn how to save for college.</p>
      <div className="divider"></div>
      <h2>Screens</h2>
  </article>
);

export default TIOPortal;
