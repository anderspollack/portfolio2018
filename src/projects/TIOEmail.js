import React from 'react';
import TagList from '../components/TagList';
import ExpandingWindow from '../components/ExpandingWindow';
import template1Mobile from './img/tuition-io/email-template-1-mobile.png';
import template1Desktop from './img/tuition-io/email-template-1-desktop.png';
import template2Mobile from './img/tuition-io/email-template-2-mobile.png';
import template2Desktop from './img/tuition-io/email-template-2-desktop.png';
import template3Mobile from './img/tuition-io/email-template-3-mobile.png';
import template3Desktop from './img/tuition-io/email-template-3-desktop.png';

const TIOEmail = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <p className="small">Template 1</p>
      <ExpandingWindow
        mobileImg={ template1Mobile }
        desktopImg={ template1Desktop }
        expanding={ false }
      />
      <div className="divider"></div>
      <p className="small">Template 2</p>
      <ExpandingWindow
        mobileImg={ template2Mobile }
        desktopImg={ template2Desktop }
        expanding={ false }
      />
      <div className="divider"></div>
      <p className="small">Template 3</p>
      <ExpandingWindow
        mobileImg={ template3Mobile }
        desktopImg={ template3Desktop }
        expanding={ false }
      />
  </article>
);

export default TIOEmail;
