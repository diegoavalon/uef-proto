import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';

import { originalSummarySchema, originalSummaryUISchema } from './config';

const initialState = processForm(originalSummarySchema, originalSummaryUISchema, originalSummarySchema, originalSummaryUISchema);

const samplePlan = [{
    category: "Health",
    carrier: "UnitedHealthcare",
    planName: "Short Term Medical Value Select A",
    benefits: [{
        label: "Overview",
        list: [
            "Plan Type:EPO",
            "Deductible:$12,500 individual | $25,000 family",
            "Doctor visits:30% coinsurance after deductible",
            "Annual Max Benefit:$2 Million per person"
        ],
    }, {
        label: "Cost",
        list: [
            "Monthly rate:$248.80/mo"
        ]
    }]
}, {
    category: "Dental",
    carrier: "UnitedHealthcare",
    planName: "Dental Primary SM",
    benefits: [{
        label: "Overview",
        list: [
            "Plan Type:DPPO",
            "Deductible:$50 per person",
            "Coinsurance:30%",
            "Annual Max Benefit:$1,000 per person"
        ],
    }, {
        label: "Cost",
        list: [
            "Monthly rate:$41.36/mo"
        ]
    }]              
}, {
    category: "Vision",
    carrier: "UnitedHealthcare",
    planName: "Plan B",
    benefits: [{
        label: "Overview",
        list: [
            "Eye Exam:$10 Copay",
            "Lenses:$10 Copay",
            "Frames:any charge over $150 allowance",
            "Summarys:$0 Copay "
        ],
    }, {
        label: "Cost",
        list: [
            "Monthly rate:$25.60/mo"
        ]
    }]
}];

const EnrollmentSection = ({ title, children }) => {
    return (
        <div className="enrollment__section">
            <div className="enrollment__section-title">
                <span className="bodySmall uppercase text-center font-semibold">{title}</span>
            </div>
            <div className="enrollment__section-body">

                {children}

            </div>
        </div>
    );
};

class Summary extends Component {
    state = {
        ...initialState,
        isFormComplete: false,
        isSetupBillingActive: false,
        isEnrollmentActive: false
    };

    handleChange = (data) => {
        const schema = { ...this.state.schema };
        const uiSchema = { ...this.state.uiSchema };
        const { formData } = data;
    
        const newState = processForm(originalSummarySchema, originalSummaryUISchema, schema, uiSchema, formData);
    
        this.setState(newState);
        console.log(formData);
    };

    // handleStepChange = () {

    // };

    handleFormSubmit = (data) => {
        const { formData } = data;
    
        console.log('This is the form info we will submit', formData);
    };

    render() {
        const applicationSummary = (
            <section className="step__application-wrapper">
                <div className="application-actions flex justify-end mb-xxs">                                
                    <button className="button pr-0">Edit My Plan</button>
                </div>
                <section className="step__application">
                    {samplePlan.map(({ category, carrier, planName, benefits }, i) => (
                        <div key={i} className="app-group">
                            <div className="app-group__category h4">{category}</div>
                            <h3 className="app-group__category-plan mb-xxs">{carrier}</h3>
                            <p className="subtitle mb-base">{planName}</p>
                            {benefits.map((benefit, i) => {
                                return (
                                    <dl key={i}>
                                        <dt className="uppercase bodySmall">{benefit.label}</dt>
                                        {benefit.list.map((item, i) => {
                                            const textArr = item.split(':');
                                            return (
                                                <dd key={i}>
                                                    <span>{textArr[0]}</span>
                                                    <span className="font-semibold">{textArr[1]}</span>
                                                </dd>
                                            );
                                        })}
                                    </dl>
                                );
                            })}
                    </div>
                    ))}
                </section>
            </section>
        );

        return (
            <Step
                classNames="Summary"
                stepNum="Last Step"
                title="Just need your review."
                subtitle="Here is your customized health plan"
                applicationSummary={applicationSummary}
            >
                

                <div className="step__sidebar w-full">
                    <div className="enrollment">
                        <div className="cost">
                            <EnrollmentSection title="My Health Plan">
                                <div className="cost__price flex justify-around items-end pt-sm" style={{ marginBottom: '20px' }}>
                                    <span className="h3">Total</span>
                                    <div>
                                        <span className="h1 relative" style={{ top: '2px' }}>$315.76</span>
                                        <span className="h5">/mo</span>
                                    </div>
                                </div>
                                <button className="enrollment__button button button-xlg w-full" onClick={() => this.setState({ isSetupBillingActive: true })}>Start My Guided Review</button>
                                <button className="button w-full mt-sm">Download My Application</button>
                            </EnrollmentSection>

                            <CSSTransition
                                in={this.state.isSetupBillingActive}
                                timeout={500}
                                classNames="slide-up"
                                unmountOnExit
                            >
                                <EnrollmentSection title="Billing & Enrollment">
                                <Form schema={this.state.schema}
                                    uiSchema={this.state.uiSchema}
                                    formData={this.state.formData}
                                    onChange={this.handleChange}
                                    onSubmit={this.handleFormSubmit}
                                    onError={log("errors")}>
                                        <button className="enrollment__button button button-xlg w-full" onClick={() => this.setState({ isEnrollmentActive: true })}>Enroll</button>
                                        <p className="caption my-sm text-center">By clicking Enroll, I acknowledge that I indicate my intent to electronically sign the application and warrant that all of the information I have provided is true, complete and accurate.</p>
                                    </Form>
                                </EnrollmentSection>
                            </CSSTransition>

                            <CSSTransition
                                in={this.state.isEnrollmentActive}
                                timeout={4500}
                                classNames="slide-up"
                                unmountOnExit
                            >
                                <EnrollmentSection title="Success Page">
                                    <div className="my-md text-center">
                                        <h3 className="h2 mb-sm">Congratulations! <span role="img" aria-label="Party icon">🎉</span></h3>
                                        <p className="bodyLarge">The above action should redirect to a success page including things for our customer to look for.</p>
                                    </div>
                                </EnrollmentSection>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
                    
            </Step>                
            
        );
    }
}

export default Summary;