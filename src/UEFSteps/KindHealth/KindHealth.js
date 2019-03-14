import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';
import { widgets } from '../../widgets';

import { originalKindHealthSchema, originalKindHealthUISchema } from './config';

const initialState = processForm(originalKindHealthSchema, originalKindHealthUISchema, originalKindHealthSchema, originalKindHealthUISchema);

class KindHealth extends Component {
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
    
        const newState = processForm(originalKindHealthSchema, originalKindHealthUISchema, schema, uiSchema, formData);
    
        this.setState(newState);
        console.log(formData);
    }
    
    handleStepChange() {
        console.log('Transitioning to next step');
    }
    
    handleFormSubmit(data) {
        const { formData } = data;
    
        console.log('This is the form info we will submit', formData);
    }

    render() {    
        return (
            <Step title="The Open Enrollment period has ended."
                subtitle="But, you still have great options for complete healthcare coverage."
            >
                <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <div className="flex justify-between text-white">
                        <Link to="/apply" className="button button-xlg" onClick={() => this.props.transitionToStep("Information")}>Back</Link>
                        <Link to="/apply/payment" className="button button-xlg" onClick={() => this.props.transitionToStep("Information")}>Next</Link>
                    </div>
                </Form>
            </Step>
        );
    }
}

export default KindHealth;