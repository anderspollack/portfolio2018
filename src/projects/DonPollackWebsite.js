import React from 'react';
import TagList from '../components/TagList';
import ExpandingWindow from '../components/ExpandingWindow';
import mobileImg from './img/donpollack/donpollack-website-mobile.jpg';
import desktopImg from './img/donpollack/donpollack-website-desktop.jpg';
import oldDesktopImg from './img/donpollack/donpollack-website-desktop-old.png';

const DonPollackWebsite = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <ExpandingWindow
        mobileImg={ mobileImg }
        desktopImg={ desktopImg }
        expanding={ true }
      />
      <h2 className="externalLink">
          External Link:
          <a href="http://donpollack.com" target="_blank" rel="noopener noreferrer">donpollack.com</a>
      </h2>
      <div className="divider"></div>
      <p>A website for artist Don Pollack, who is also my&nbsp;dad.</p>
      <p>This site is built with Jekyll/Liquid and plain HTML and CSS. It's a simplified, responsive update to an older design, which currently lives in the 'Museum' section of the current site.</p>
      <p><strong>'Museum' Version</strong></p>
      <a
        href={ oldDesktopImg }
        target="_blank"
        className="screenThumbnail"
      >
          <img
            alt="Screenshot of a previous version of donpollack.com"
            src={ oldDesktopImg }
            className="static"
          />
      </a>
  </article>
);

export default DonPollackWebsite;
