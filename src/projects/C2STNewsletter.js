import React from 'react';
import TagList from '../components/TagList';
/* import ScrollingWindow from '../components/ScrollingWindow';
 * import mobileImg from './img/c2st-website-mobile.jpg';
 * import desktopImg from './img/c2st-website-desktop.jpg'; */
import newsletter2015 from './doc/c2st/newsletter-2015.pdf';
import newsletter2015Img from './img/c2st/newsletter-2015-spread.jpg';
import newsletter2016 from './doc/c2st/newsletter-2016.pdf';
import newsletter2016Img from './img/c2st/newsletter-2016-spread.jpg';
import newsletter2017 from './doc/c2st/newsletter-2017.pdf';
import newsletter2017Img from './img/c2st/newsletter-2017-spread.jpg';

const C2STNewsletter = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <h2>Issues</h2>
      <ul className="thumbnails spreads">
          <li>
              <a target="_blank" href={ newsletter2015 }>
                  <img alt="" src={ newsletter2015Img }/>
              </a>
              <p>2015</p>
          </li> 
          <li>
              <a target="_blank" href={ newsletter2016 }>
                  <img alt="" src={ newsletter2016Img }/>
              </a>
              <p>2016</p>
          </li>
          <li>
              <a target="_blank" href={ newsletter2017 }>
                  <img alt="" src={ newsletter2017Img }/>
              </a>
              <p>2017</p>
          </li>
      </ul>
      <div className="divider"></div>
      <p>An annual publication for the Chicago Council on Science and Technology that recognizes supporters and memorable event highlights from the fiscal year.</p>
  </article>
);

export default C2STNewsletter;
