import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Shepherd from 'shepherd.js';
import withSizes from 'react-sizes';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';

import { originalSummarySchema, originalSummaryUISchema } from './config';

const initialState = processForm(originalSummarySchema, originalSummaryUISchema, originalSummarySchema, originalSummaryUISchema);

initialState.formData = {sameAddress: true};

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
        isReadyToEnroll: false,
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

    handleFormSubmit = (data) => {
        const { formData } = data;
    
        console.log('This is the form info we will submit', formData);
    };

    smoothScroll = () => {
        const targetElTop = document.querySelector('.shepherd-enabled').getBoundingClientRect().top;

        window.scroll({
            top: targetElTop - 40, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    beginGuidedReview = () => {
        const tooltipPos = this.props.isMobile ? 'bottom' : 'right';

        this.tour = new Shepherd.Tour({
            useModalOverlay: true
        });

        this.tour.addStep('step-one', {
            title: 'Your Health Plan',
            text: 'Here is a brief summary of your EPO plan. You have a selected an affordable plan with strong coverage for any type of emergency.',
            attachTo: {
                element: '.app-group.Health',
                on: tooltipPos
            },
            scrollTo: true,
            scrollToHandler: this.smoothScroll,
            buttons: [
                {
                    text: "Great 👍",
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('purchase-Health--cost', {
            title: 'Payment',
            text: `
                <p class="mb-sm">This plan has an <b>initial payment</b> of <b>$264.24</b> due upon enrollment.</p>
                <p>A monthly payment of <b>$248.80</b> is due <b>every 30 days</b> from the day of enrollment</p>
            `,
            attachTo: {
                element: '.app-group.Health dl:last-child',
                on: tooltipPos
            },
            scrollTo: true,
            scrollToHandler: this.smoothScroll,
            buttons: [
                {
                    text: 'Previous',
                    action: this.tour.back
                }, {
                    text: "Got it!",
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('purchase-Dental', {
            title: 'Your Dental Plan',
            text: 'Here is a brief summary of your Dental plan.',
            attachTo: {
                element: '.app-group.Dental',
                on: tooltipPos
            },
            scrollTo: true,
            scrollToHandler: this.smoothScroll,
            buttons: [
                {
                    text: 'Previous',
                    action: this.tour.back
                }, {
                    text: "Looks good",
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('purchase-Vision', {
            title: 'Your Vision Plan',
            text: 'Here is a brief summary of your Vision plan.',
            attachTo: {
                element: '.app-group.Vision',
                on: tooltipPos
            },
            scrollTo: true,
            scrollToHandler: this.smoothScroll,
            buttons: [
                {
                    text: 'Previous',
                    action: this.tour.back
                }, {
                    text: "Perfect!",
                    action: this.tour.next
                }
            ]
        });
        this.tour.addStep('last-step', {
            title: 'Enrollment',
            text: `
                <p class="mb-sm">When ready, &nbsp;just tap "<b>I'm Ready to Enroll</b>".</p>
                <p>Tap "Download My Application" for a copy.</p>
            `,
            attachTo: {
                element: '.enrollment',
                on: "top"
            },
            scrollTo: true,
            scrollToHandler: () => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            buttons: [
                {
                    text: 'Previous',
                    action: this.tour.back
                }, {
                    text: "Close Review",
                    action: this.tour.next
                }
            ]
        });

        this.tour.start();
        this.setState({isReadyToEnroll: true});
    };

    enterEnrollmentState = (event) => {
        event.target.style.display = 'none';
        this.setState({isSetupBillingActive: true});
    }

    render() {
        const applicationSummary = (
            <section className="step__application-wrapper">
                <div className="application-actions flex justify-end mb-xxs">                                
                    <button className="button pr-0">Edit My Plan</button>
                </div>
                <section className="step__application">
                    {samplePlan.map(({ category, carrier, planName, benefits }, i) => (
                        <div key={i} className={`app-group ${category}`}>
                            <div className="app-group__category h4">{category}</div>
                            <h3 className="app-group__category-carrier mb-xxs">{carrier}</h3>
                            <p className="app-group__category-plan subtitle mb-base">{planName}</p>
                            {benefits.map((benefit, i) => {
                                return (
                                    <dl key={i}>
                                        <dt className="uppercase bodySmall">{benefit.label}</dt>
                                        {benefit.list.map((item, i) => {
                                            const textArr = item.split(':');
                                            return (
                                                <dd key={i} className="flex justify-between flex-wrap">
                                                    <span>{textArr[0]}</span>
                                                    <span className="ml-auto font-semibold">{textArr[1]}</span>
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
                classNames={this.props.isMobile && this.state.isSetupBillingActive ? 'Summary full-mode' : 'Summary'}
                stepNum="Last Step"
                title="Just need your review."
                subtitle="Here is your customized health plan"
                applicationSummary={applicationSummary}
            >
                <div className="step__sidebar w-full">
                    <div className="enrollment" ref={el => this.sidebarEl = el}>
                        <div className="cost">
                            <EnrollmentSection title="My Health Plan">
                                <div className="cost__price flex justify-around items-end pt-sm" style={{ marginBottom: '24px' }}>
                                    <span className="h3">Total</span>
                                    <div>
                                        <span className="h1 relative" style={{ top: '7px' }}>$315.76</span>
                                        <span className="h5 relative" style={{ top: '6px', right: '-2px' }}>/mo</span>
                                    </div>
                                </div>
                                {this.state.isReadyToEnroll ? <div>
                                        <button className="enrollment__button button button-xlg w-full pulse" onClick={this.enterEnrollmentState.bind(this)}>I'm Ready to Enroll</button>
                                        <button className="button w-full mt-sm flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 100 100">
                                                <path d="M76.25 57.94263c2.07375 0 3.75 1.66768 3.75 3.72249v18.6124C80 82.33232 78.32375 84 76.25 84h-52.5C21.67625 84 20 82.33233 20 80.27752v-18.6124c0-2.05481 1.67625-3.72249 3.75-3.72249s3.75 1.66768 3.75 3.72249v14.88992h45V61.66512c0-2.05481 1.67625-3.72249 3.75-3.72249zM37.65125 44.14805L46.25 52.6837V20.72248C46.25 18.66768 47.92625 17 50 17s3.75 1.66767 3.75 3.72248V52.6837l8.59875-8.53565C63.08 43.42217 64.04 43.05737 65 43.05737c.96 0 1.92.3648 2.65125 1.09068 1.46625 1.4555 1.46625 3.8081 0 5.26359L52.655 64.29784c-.34875.3462-.76125.61793-1.2225.80778-.915.37597-1.95.37597-2.865 0-.46125-.18985-.87375-.46159-1.2225-.80778l-14.99625-14.8862c-1.46625-1.45549-1.46625-3.8081 0-5.26359 1.46625-1.45549 3.83625-1.45549 5.3025 0z" fill="currentColor" fillRule="evenodd"/>
                                            </svg>
                                            <span className="ml-xs">Download My Application</span>
                                        </button>
                                    </div>    
                                :  <button className="enrollment__button button button-xlg w-full" onClick={this.beginGuidedReview.bind(this)}>Start My Guided Review</button>
                                }
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

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 800,
});

export default withSizes(mapSizesToProps)(Summary);