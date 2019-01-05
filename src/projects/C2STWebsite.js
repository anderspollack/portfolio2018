import React from 'react';
import TagList from '../components/TagList';
import ExpandingWindow from '../components/ExpandingWindow';
import mobileImg from './img/c2st/c2st-website-mobile.png';
import desktopImg from './img/c2st/c2st-website-desktop.jpg';

const C2STWebsite = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <ExpandingWindow mobileImg={ mobileImg } desktopImg={ desktopImg } expanding={ true }/>
      <h2 className="externalLink">
          External Link:
          <a href="https://www.c2st.org" target="_blank" rel="noopener noreferrer">c2st.org</a>
      </h2>
      <div className="divider"></div>
      <p>The Chicago Council on Science and Technology serves to enhance the public’s understanding of science. For them to better accomplish their mission, they needed a more flexible website.</p>
      <h2>Project Goals</h2>
      <ul className="text">
          <li>
              <p><strong>Build a site that would be less work to maintain</strong></p>
              <p>WordPress theme with a C2ST-oriented admin panel instead of an overpowered Drupal/CiviCRM application</p>
          </li>
          <li>
              <p><strong>Provide an easier way to accept and manage donations</strong></p>
              <p>Offload core donation functionality to GiveWP for better long-term support and a straightforward integration with C2ST's supporter database</p>
          </li>
          <li>
              <p><strong>Streamline promotion of events and original content</strong></p>
              <p>Configurable page templates allow content to be featured across primary pages</p>
              <p>Custom content types provide more straightforward filtering and navigation through all C2ST media</p>
          </li>
      </ul>
  </article>
);

export default C2STWebsite;
