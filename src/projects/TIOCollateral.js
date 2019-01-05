import React from 'react';
import TagList from '../components/TagList';
/* Sales Collateral */
import executiveSummary from './doc/tuition-io/executive-summary.pdf';
import executiveSummaryImg from './img/tuition-io/executive-summary.jpg';
import profitability from './doc/tuition-io/profitability-one-pager.pdf';
import profitabilityImg from './img/tuition-io/profitability-one-pager.jpg';
import salesFAQ from './doc/tuition-io/sales-faq.pdf';
import salesFAQImg from './img/tuition-io/sales-faq.jpg';
/* Business Size */
import businessSize1 from './doc/tuition-io/business-size-one-pager-1.pdf';
import businessSize1Img from './img/tuition-io/business-size-one-pager-1.jpg';
import businessSize2 from './doc/tuition-io/business-size-one-pager-2.pdf';
import businessSize2Img from './img/tuition-io/business-size-one-pager-2.jpg';
import businessSize3 from './doc/tuition-io/business-size-one-pager-3.pdf';
import businessSize3Img from './img/tuition-io/business-size-one-pager-3.jpg';
/* Industry Type */
import industryType1 from './doc/tuition-io/industry-type-one-pager-1.pdf';
import industryType1Img from './img/tuition-io/industry-type-one-pager-1.jpg';
import industryType2 from './doc/tuition-io/industry-type-one-pager-2.pdf';
import industryType2Img from './img/tuition-io/industry-type-one-pager-2.jpg';
import industryType3 from './doc/tuition-io/industry-type-one-pager-3.pdf';
import industryType3Img from './img/tuition-io/industry-type-one-pager-3.jpg';
/* Partner Collateral */
import employeeOnePager from './doc/tuition-io/employee-one-pager.pdf';
import employeeOnePagerImg from './img/tuition-io/employee-one-pager.jpg';
import faq from './doc/tuition-io/faq-template.pdf';
import faqImg from './img/tuition-io/faq-template.jpg';
import census from './doc/tuition-io/census-one-pager.pdf';
import censusImg from './img/tuition-io/census-one-pager.jpg';
import wellness from './doc/tuition-io/wellness–one-pager.pdf';
import wellnessImg from './img/tuition-io/wellness-one-pager.jpg';
/* Business Cards */
import businessCardFront from './img/tuition-io/business-card-front.jpg';
import businessCardBack from './img/tuition-io/business-card-back.jpg';

const TIOCollateral = (props) => (
  <article>
      <h1>{ props.title }</h1>
      <TagList tags={ props.tags }/>
      <p>Updated Tuition.io marketing material and administrative resource documents to align with their updated partner platform and brand identity</p>
      <div className="divider"></div>
      <h2>Sales Collateral</h2>
      <ul className="thumbnails letters">
          <li>
              <a target="_blank" href={ executiveSummary }>
                  <img alt="" src={ executiveSummaryImg }/>
              </a>
              <p>Executive Summary</p>
          </li> 
          <li>
              <a target="_blank" href={ profitability }>
                  <img alt="" src={ profitabilityImg }/>
              </a>
              <p>Profitability Summary</p>
          </li> 
          <li>
              <a target="_blank" href={ salesFAQ }>
                  <img alt="" src={ salesFAQImg }/>
              </a>
              <p>Sales FAQ</p>
          </li> 
          <li>
              <a target="_blank" href={ businessSize1 }>
                  <img alt="" src={ businessSize1Img }/>
              </a>
              <p>Small Business Sample&nbsp;Overview</p>
          </li> 
          <li>
              <a target="_blank" href={ businessSize2 }>
                  <img alt="" src={ businessSize2Img }/>
              </a>
              <p>Midsized Business Sample&nbsp;Overview</p>
          </li> 
          <li>
              <a target="_blank" href={ businessSize3 }>
                  <img alt="" src={ businessSize3Img }/>
              </a>
              <p>Large Business Sample&nbsp;Overview</p>
          </li> 
          <li>
              <a target="_blank" href={ industryType1 }>
                  <img alt="" src={ industryType1Img }/>
              </a>
              <p>Tech Industry Sample&nbsp;Overview</p>
          </li> 
          <li>
              <a target="_blank" href={ industryType2 }>
                  <img alt="" src={ industryType2Img }/>
              </a>
              <p>Healthcare Industry Sample&nbsp;Overview</p>
          </li> 
          <li>
              <a target="_blank" href={ industryType3 }>
                  <img alt="" src={ industryType3Img }/>
              </a>
              <p>Engineering Industry Sample&nbsp;Overview</p>
          </li> 
      </ul>
      {/*       <h2>Presentation Design</h2> */}
      <h2>Partner Collateral</h2>
      <ul className="thumbnails letters">
          <li>
              <a target="_blank" href={ employeeOnePager }>
                  <img alt="" src={ employeeOnePagerImg }/>
              </a>
              <p>Employee One-pager Template</p>
          </li>
          <li>
              <a target="_blank" href={ faq }>
                  <img alt="" src={ faqImg }/>
              </a>
              <p>Partner FAQ Template</p>
          </li>
          <li>
              <a target="_blank" href={ census }>
                  <img alt="" src={ censusImg }/>
              </a>
              <p>Partner Census Overview</p>
          </li>
          <li>
              <a target="_blank" href={ wellness }>
                  <img alt="" src={ wellnessImg }/>
              </a>
              <p>Student Loan Wellness&nbsp;Overview</p>
          </li>
      </ul>
      <h2>Email Templates</h2>
      <h2>Business Cards</h2>
      <ul className="thumbnails">
          <li>
              <a target="_blank" href={ businessCardFront }>
                  <p>Business Card - Front</p>
                  <img alt="" src={ businessCardFront } className="static"/>
              </a>
          </li> 
          <li>
              <a target="_blank" href={ businessCardBack }>
                  <p>Business Card - Back</p>
                  <img alt="" src={ businessCardBack } className="static"/>
              </a>
          </li> 
      </ul>

  </article>
);

export default TIOCollateral;
