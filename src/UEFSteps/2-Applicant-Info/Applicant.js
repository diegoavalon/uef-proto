import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';
import { widgets } from '../../widgets';

import { originalApplicantSchema, originalApplicantUISchema } from './config';

const initialState = processForm(originalApplicantSchema, originalApplicantUISchema, originalApplicantSchema, originalApplicantUISchema);

class Applicant extends Component {
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
    
        const newState = processForm(originalApplicantSchema, originalApplicantUISchema, schema, uiSchema, formData);
    
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
                stepNum="Step 2/4" 
                title="Who will be on this policy?"
                subtitle="We'll walk you through everything you need to have your family enrolled under this plan."
            >
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <div className="flex justify-between text-white mt-neg-xxl">
                        <Link to="/eligibility" className="button button-xlg secondary mt-lg" onClick={() => this.props.transitionToStep("Information")}>
                            Back
                        </Link>
                        <Link to="/contact" className="button button-xlg primary mt-lg" onClick={() => this.props.transitionToStep("Information")}>
                            <span className="mr-sm">Next</span>
                            Contact Info
                        </Link>
                    </div>
                </Form>
            </Step>
        );
    }
}

export default Applicant;