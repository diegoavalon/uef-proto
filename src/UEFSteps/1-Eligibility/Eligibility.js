import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';
import { widgets } from '../../widgets';

import { originalEligibilitySchema, originalEligibilityUISchema } from './config';

const initialState = processForm(originalEligibilitySchema, originalEligibilityUISchema, originalEligibilitySchema, originalEligibilityUISchema);

class Eligibility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
    }

    handleChange(data) {
        const schema = { ...this.state.schema };
        const uiSchema = { ...this.state.uiSchema };
        const { formData } = data;
    
        const newState = processForm(originalEligibilitySchema, originalEligibilityUISchema, schema, uiSchema, formData);
    
        this.setState(newState);
        console.log(formData);
    }
    
    handleStepChange() {
        
    }
    
    handleFormSubmit(data) {
        const { formData } = data;
    
        console.log('This is the form info we will submit', formData);
    }

    render() {    
        return (
            <Step
                stepNum="1/5"
                title="Enrollment is simple."
                subtitle="Let’s quickly see if you are eligible."
            >
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <div className="flex justify-end text-white">
                        <Link to="/applicants" className="button button-xlg mt-lg" onClick={() => this.props.transitionToStep("Information")}>
                            <span className="mr-sm" style={{ color: 'var(--pm-green200)' }}>Next</span>
                            Applicant Info
                        </Link>
                    </div>
                </Form>
            </Step>
        );
    }
}

export default Eligibility;