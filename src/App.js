import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Eligibility from "./UEFSteps/1-Eligibility/Eligibility";
import Applicant from './UEFSteps/2-Applicant-Info/Applicant';
import MockScreenshot from './images/entry-page.jpg';

import 'ehealth-pillar/output.css';
import './styles/main.scss';

class Base extends Component {
  render() {
    return (
      <Router>
        <Route component={App} />
      </Router>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
    };
  }

  findStep(name) {
    return this.state.steps.find(obj => obj.name = name);
  }

  openModal() {
    document.body.style.overflow = 'hidden';

    this.setState({ 
      isModalActive: true,
      isStepOneActive: true
    });
  }

  closeModal() {
    document.body.style.overflow = 'auto';

    this.setState({ isModalActive: false });
  }

  transitionToStep(stepName) {
    this.setState({
      stepEligibility: false,
      stepInformation: false,
      stepPayment: false,
    });

    this.setState(state => {
      state[`step${stepName}`] = true;
      return state;
    });
  }

  render() {
    const { location } = this.props;

    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="step"
          timeout={700}
        >
          <Switch>
            <Route 
              path="/"
              exact
            >
              <>
                <eh-header></eh-header>

                <div className="pb-xl">
                  <div className="relative text-center cursor-pointer border-t border-solid border-grey">
                    <Link to="/eligibility">
                      <img className="mx-auto" alt="mock screenshot" src={MockScreenshot}/>
                    </Link>
                    <div className="absolute pin-b pin-l w-full h-48 z-10"
                    style={{ background: 'linear-gradient(to top, #ffffff,  rgba(255, 255, 255, 0.2)' }}></div>
                  </div>
                  <h3 className="pt-lg h3 text-center">Click Above to Start <span className="h2 ml-xs" role="img" alt="pointing up emoji" aria-label="pointing up emoji">☝️</span></h3>
                </div>
                
                <eh-footer></eh-footer>
              </>
            </Route>
            <Route
              path="/eligibility"
              component={Eligibility}
              exact
            /> 
            <Route
              path="/applicant-info"
              component={Applicant}
              exact
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Base;
