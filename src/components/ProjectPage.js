import React, { Component } from 'react';
import './ProjectPage.css';
import TIOPortal from '../projects/TIOPortal';
import TIOEmail from '../projects/TIOEmail';
import TIOCollateral from '../projects/TIOCollateral';
import C2STWebsite from '../projects/C2STWebsite';
import C2STProgramming from '../projects/C2STProgramming';
import C2STNewsletter from '../projects/C2STNewsletter';
import DonPollackWebsite from '../projects/DonPollackWebsite';
const classNames = require('classnames');

export default class ProjectPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentWillUnmount () {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (!(this.props.location === prevProps.location)) {
      window.scrollTo(0, 0);
    }
  }

  handleClick = (projectLink) => {
    if (projectLink) {
      this.props.onNavButtonClick(projectLink, this.props.history);
    }
  }
  
  render() {
    const classList = classNames(
      { 'ProjectPage': true },
    );
    const projects = this.props.projects;
    const projectName = this.props.match.params.projectName;
    const projectNames = projects.map(project => project.id);
    const previousProjectName = projectNames.indexOf(projectName) === 0 ? (
      projectNames[projectNames.length - 1]
    ) : (
      projectNames[projectNames.indexOf(projectName) - 1]
    );
    const nextProjectName = projectNames.indexOf(projectName) === projectNames.length - 1 ? (
      projectNames[0]
    ) : (
      projectNames[projectNames.indexOf(projectName) + 1]
    );

    const previousProjectTitle = projects.filter(project => project.id === previousProjectName)[0].title;
    const nextProjectTitle = projects.filter(project => project.id === nextProjectName)[0].title;

    const project = projects.filter(project => project.id === projectName)[0];
    /*     const project = this.props.project; */
    const title = project.title;
    const tags = project.tags;
    let projectBody;
    switch (projectName) {
      case 'tio-portal': projectBody = (<TIOPortal title={ title } tags={ tags }/>);
        break;
      case 'tio-email': projectBody = (<TIOEmail title={ title } tags={ tags }/>);
        break;
      case 'tio-collateral': projectBody = (<TIOCollateral title={ title } tags={ tags }/>);
        break;
      case 'c2st-website': projectBody = (<C2STWebsite title={ title } tags={ tags }/>);
        break;
      case 'c2st-programming': projectBody = (<C2STProgramming title={ title } tags={ tags }/>);
        break;
      case 'c2st-newsletter': projectBody = (<C2STNewsletter title={ title } tags={ tags }/>);
        break;
      case 'donpollack-website': projectBody = (<DonPollackWebsite title={ title } tags={ tags }/>);
        break;
      default: projectBody = (
        <article>
            <h1>{ title }</h1>
            <p>Project information coming soon</p>
        </article>
      );
        break;
    }
 
    return (
      <div className={ classList }>
	  { projectBody }
          <NavigationButton previous={ true }
            onClick={ this.handleClick }
            projectLink={ previousProjectName }
            projectTitle={ previousProjectTitle }
          />
          <NavigationButton next={ true }
            onClick={ this.handleClick }
            projectLink={ nextProjectName }
            projectTitle={ nextProjectTitle }
          />
      </div>
    );
  }
}

class NavigationButton extends Component {
  handleClick = (e) => {
    this.props.onClick(this.props.projectLink);
  }

  render() {
    const classList = classNames(
      { 'NavigationButton': true },
      { 'next': this.props.next },
      { 'previous': this.props.previous },
    );
    const navText = this.props.previous ? 'Previous: ' : 'Next: ';
    const navTitle = this.props.projectTitle;
    
    return(
      <div id={ this.props.projectLink } className={ classList }
        onClick={ this.handleClick }>
          <p className="navText">
              { navText }
          </p>
          <p className="navTitle">
              { navTitle }
          </p>
      </div>
    );
  }
}
