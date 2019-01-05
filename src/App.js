import React, { Component } from 'react';
import { Route } from 'react-router-dom';
/* import { CSSTransition } from 'react-transition-group'; */
import './App.css';
import World from './components/World';
import ProjectNav from './components/ProjectNav';
import ProjectPage from './components/ProjectPage';
const data = {
  collections: [{
    id: 0,
    heading: 'The Chicago Council on Science and Technology',
    body: 'Graphic design and web development for a nonprofit organization that promotes science education and outreach',
    icon: 'Icon-folder',
    projects: [
      {
        id: 'c2st-website',
        title: 'C2ST.org Website',
        tags: ['Icon-ux', 'Icon-code', 'Icon-graphic'],
      }, {
        id: 'c2st-programming',
        title: 'C2ST Event Collateral 2015 - 2018',
        tags: ['Icon-graphic', 'Icon-code'],
      }, {
        id: 'c2st-newsletter',
        title: 'C2ST Annual Newsletter 2015 - 2017',
        tags: ['Icon-graphic'],
      }, /* {
            id: 'c2st-programs',
            title: 'C2ST Annual Newsletter 2015 - 2018',
            tags: ['Icon-graphic'],
            }, */
    ]
  }, {
    id: 1,
    heading: 'Tuition.io',
    body: 'Product design and brand collateral for a student loan repayment benefit B2B platform',
    projects: [
      {
        id: 'tio-portal',
        title: 'Tuition.io Employee Portal',
        tags: ['Icon-ux'],
      }, {
        id: 'tio-email',
        title: 'Tuition.io Email Templates',
        tags: ['Icon-code'],
      }, {
        id: 'tio-collateral',
        title: 'Tuition.io Brand Collateral',
        tags: ['Icon-graphic', 'Icon-presentation'],
      }, 
    ]
  }, {
    id: 2,
    heading: 'Museum in Trust',
    body: 'Web design and development for Chicago artist Don Pollack',
    projects: [
      {
        id: 'donpollack-website',
        title: 'DonPollack.com',
        tags: ['Icon-ux', 'Icon-code'],
      },
    ]
  }]
};

class App extends Component {
  constructor(props) {
    super(props);
    const collections = data.collections;
    const projects = collections.map(collection => collection.projects).reduce((acc, val) => acc.concat(val), []);
    this.state = {
      worldExpanded: false,
      expandedCards: [],
      selectedProject: '',
      collections: collections,
      projects: projects,
      projectPage: false,
    };
  }

  handleChange = (expandedCards) => {
    this.setState({
      expandedCards: expandedCards,
    });
  }
  
  handleProjectSelect = (projectName, history) => {
    this.setState(
      {
        selectedProject: projectName,
        projectPage: true,
      },
      () => history.push(`/projects/${ projectName }`));
  }

  handleWorldClick = (location, history) => {
    const isHome = location.pathname === '/';
    const isProjectPage = location.pathname.includes('/projects/');
    if (isHome || isProjectPage) {
      this.setState(() => (
        {
          worldExpanded: false,
          projectPage: false,
        }), () => history.push('/projects'));
    } else {
      this.setState(
        {
          worldExpanded: true,
        },
        () => history.push('/')
      );
    }
  }

  handleNavButtonClick = (projectLink, history) => {
    this.setState(() => (
      {
        selectedProject: projectLink,
      }),
      () => history.push(projectLink)
    );
  }
  
  render() {
    return (
      <div className="App">
          <Route path="/" render={(props) => (
	    <World {...props} onClick={ this.handleWorldClick } expanded={ this.state.worldExpanded }/>
	  )}/>
          <Route path="/projects" render={(props) => (
            <div className="projectsWrapper">
                <ProjectNav {...props}
                  collections={ this.state.collections }
                  projects={ this.state.projects }
                  expandedCards={ this.state.expandedCards }
                  onChange={ this.handleChange }
                  onProjectSelect={ this.handleProjectSelect }
                />
	        <Route path="/projects/:projectName"
                  render={(props) => (
                   <ProjectPage {...props}
                     project={ this.state.selectedProject }
                     projects={ this.state.projects }
                     onNavButtonClick={ this.handleNavButtonClick }/>
                 )}/>
            </div>
          )}/>
      </div>
    );
  }
}

export default App;
