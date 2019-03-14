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
        debugger;
    
        console.log('This is the form info we will submit', formData);
    }

    render() {    
        return (
            <Step
                stepNum="1/2"
                title="Enrollment is simple, let’s start with a few eligibility questions."
                subtitle="Please, carefully review and answer each question below."
            >
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <div className="flex justify-center text-white">
                        <Link to="/applicant-info" className="button button-xlg mt-lg" onClick={() => this.props.transitionToStep("Information")}>
                            <span className="mr-sm" style={{ color: 'var(--pm-green200)' }}>Next</span>
                            Applicant Information
                        </Link>
                    </div>
                </Form>
            </Step>
        );
    }
}

export default Eligibility;