import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';
import { widgets } from '../../widgets';

import { originalContactSchema, originalContactUISchema } from './config';

const initialState = processForm(originalContactSchema, originalContactUISchema, originalContactSchema, originalContactUISchema);

class Contact extends Component {
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
    
        const newState = processForm(originalContactSchema, originalContactUISchema, schema, uiSchema, formData);
    
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
                stepNum="Step 3/4" 
                title="How can we contact you?"
                subtitle="We make sure you're getting the right plan, we'll let you know if there's anything better."
            >
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <div className="flex justify-between text-white mt-neg-xxl">
                        <Link to="/applicants" className="button button-xlg secondary" onClick={() => this.props.transitionToStep("Information")}>
                            Back
                        </Link>
                        <Link to="/summary" className="button button-xlg primary" onClick={() => this.props.transitionToStep("Information")}>
                            <span className="mr-sm">Next</span>                            
                            Summary
                        </Link>
                    </div>
                </Form>
            </Step>
        );
    }
}

export default Contact;