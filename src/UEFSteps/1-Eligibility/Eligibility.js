import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import withSizes from 'react-sizes';

import Step from '../Step/Step';
import Form from '../../Form';
import { processForm, log } from '../../utilities';
import { widgets } from '../../widgets';

import { originalEligibilitySchema, originalEligibilityUISchema, originalMobileEligibilityUISchema } from './config';

const initialState = processForm(originalEligibilitySchema, originalEligibilityUISchema, originalEligibilitySchema, originalEligibilityUISchema);

class Eligibility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            isFormComplete: false
        };
    }

    handleChange(data) {
        const schema = { ...this.state.schema };
        const uiSchema = { ...this.state.uiSchema };
        const { formData } = data;
    
        const newState = processForm(originalEligibilitySchema, originalEligibilityUISchema, schema, uiSchema, formData);
    
        this.setState(newState);

        const lastQuestionAnsweredCond = data.formData.hasOwnProperty('existingInsurance') && data.formData.existingInsurance !== undefined;

        if (lastQuestionAnsweredCond) {
            console.log('Hit the last question');
            console.log(formData);
            this.setState({isFormComplete: true});
        }
    }
    
    handleStepChange() {
        
    }
    
    handleFormSubmit(data) {
        const { formData } = data;
    
        console.log('This is the form info we will submit', formData);
    }

    render() {
        const illustration = (
            <svg className="step__illustration" width="583" height="388" viewBox="0 0 583 388" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <g>
                    <circle stroke="#2E3B40" cx="448" cy="41" r="19"/>
                    <path d="M486.28573 5.29876L481.66082.72629c-.45784-.46034-1.08365-.72178-1.73838-.72623-.65473-.00445-1.28416.24846-1.74841.70254L449.1417 29.01775l-12.2764-12.1691c-.45587-.45488-1.07685-.71296-1.72625-.71743-.6494-.00447-1.27399.24503-1.7363.69359l-4.67324 4.54862c-.96317.94303-.97398 2.47317-.02424 3.42927l18.64468 18.47982c.95884.94727 2.51465.9579 3.48679.02383L486.2615 8.72803c.46805-.45028.73388-1.06575.73843-1.70968.00455-.64392-.25256-1.26296-.7142-1.7196z" fill="#ADCE45" fillRule="nonzero"/>
                    <rect fill="#EBEFF2" fillRule="nonzero" y="31" width="344" height="39" rx="19.5"/>
                    <rect fill="#EBEFF2" fillRule="nonzero" y="99" width="344" height="39" rx="19.5"/>
                    <rect fill="#EBEFF2" fillRule="nonzero" x="1" y="167" width="344" height="39" rx="19.5"/>
                    <rect fill="#EBEFF2" fillRule="nonzero" x="1" y="235" width="344" height="39" rx="19.5"/>
                    <rect stroke="#2E3B40" x="11" y="21" width="344" height="39" rx="19.5"/>
                    <rect stroke="#2E3B40" x="11" y="89" width="344" height="39" rx="19.5"/>
                    <rect stroke="#2E3B40" x="12" y="157" width="344" height="39" rx="19.5"/>
                    <rect stroke="#2E3B40" x="12" y="225" width="344" height="39" rx="19.5"/>
                    <circle stroke="#2E3B40" cx="448" cy="109" r="19"/>
                    <circle stroke="#2E3B40" cx="448" cy="177" r="19"/>
                    <circle stroke="#2E3B40" cx="448" cy="245" r="19"/>
                    <path d="M486.28573 74.29875l-4.62491-4.57246c-.45784-.46034-1.08365-.72178-1.73838-.72623-.65473-.00445-1.28416.24846-1.74841.70254L449.1417 98.01775l-12.2764-12.1691c-.45587-.45488-1.07685-.71296-1.72625-.71743-.6494-.00447-1.27399.24503-1.7363.69359l-4.67324 4.54862c-.96317.94303-.97398 2.47317-.02424 3.42927l18.64468 18.47982c.95884.94727 2.51465.9579 3.48679.02383l35.42476-34.57832c.46805-.45028.73388-1.06576.73843-1.70968.00455-.64392-.25256-1.26296-.7142-1.7196zM486.28575 211.29876l-4.62492-4.57247c-.45783-.46034-1.08364-.72178-1.73837-.72623-.65474-.00445-1.28416.24846-1.74842.70254l-29.03232 28.31517-12.2764-12.1691c-.45588-.45489-1.07686-.71296-1.72625-.71744-.6494-.00447-1.274.24503-1.7363.6936l-4.67325 4.54862c-.96317.94302-.97398 2.47317-.02424 3.42927l18.64468 18.4798c.95885.94727 2.51465.9579 3.4868.02384l35.42477-34.57836c.46804-.45028.73386-1.06575.73841-1.70966.00455-.64391-.25255-1.26295-.71419-1.71958z" fill="#ADCE45" fillRule="nonzero"/>
                    </g>
                    <g transform="translate(505 167)" fillRule="nonzero">
                    <path d="M23.64272 204s-5.1624 1.54654-7.7436 4.63963c0 0-4.64616 2.06205-7.48548 1.54654-2.83932-.51552-8.00172 4.63962-3.8718 6.18617 4.12992 1.54654 29.42568 5.67065 29.94192 4.38187C35 219.46542 35 206.3198 35 206.3198L23.64272 204zM64.48587 202s-4.8011 2.26584-6.80657 5.55282c0 0-4.20686 2.66154-7.08012 2.63926-2.87325-.02229-7.0598 5.59431-2.74483 6.3665 4.31497.7722 29.83328.5356 30.12025-.74407.28696-1.27968-1.95179-13.48602-1.95179-13.48602L64.48587 202z" fill="#88C9CE"/>
                    <circle fill="#FFB9B9" cx="31.5" cy="17.5" r="11.5"/>
                    <path d="M41.01411 20s1.28805 8.22581 3.60653 9.19355c1.61308.74573 3.091 1.72548 4.37936 2.90323L42.55977 35l-12.62284-.72581s1.03044-5.32258-.77283-7.98387C27.36083 23.62902 41.01411 20 41.01411 20zM65.35398 60s5.95354 14.91209 0 29.31868C59.40044 103.72528 56.81194 106 56.81194 106L55 87.04396l2.08349-1.84562s1.26165-5.75098.2362-9.15598c-1.02544-3.405.52765-14.02038.52765-14.02038L65.35398 60z" fill="#FFB9B9"/>
                    <path d="M21.68024 93.4625s-7.38917 16.87907-6.62477 25.06285c.7644 8.1838 6.62477 42.70915 6.62477 42.70915s-.7644 44.49936 1.5288 44.49936c2.2932 0 13.24955 4.09189 13.24955 1.27871 0-2.81317 2.2932-70.32942 2.2932-70.32942s12.99475 29.66623 14.26874 31.96791c1.274 2.3017 9.42756 38.36151 12.23035 38.36151s11.46596-2.55743 10.70156-4.34764c-.7644-1.7902-9.42757-41.68617-14.26875-51.9159-4.84119-10.22974-3.82199-48.84699-3.82199-48.84699L49.70815 84l-28.0279 9.4625z" fill="#2F2E41"/>
                    <path d="M29.7761 11.69692s-7.11332-.4993-7.62143-2.24684c-.50811-1.74754-1.52429-3.24542-1.01619-3.24542s.76214-1.24825.76214-1.24825.5081-.24964.76214 0c.25405.24965.5081-1.74753.5081-1.74753s.25405-.74895.5081-.24965c.25405.4993.25404.24965.5081-.4993.25404-.74894 1.52429-1.24824 1.52429-1.24824s4.8269.24964 5.58905-.74895c.76214-.99859 9.39977-.24965 11.1781.9986 1.77834 1.24824 9.65381 5.74191 8.38358 9.48664-1.27024 3.74472-5.8431 11.98312-5.8431 13.23136 0 1.24824-1.77833.9986-2.28643-.24965-.5081-1.24824-4.57286-2.74613-4.57286-3.49507 0-.74893-2.28643-7.7391-3.55666-7.2398-1.27023.4993-2.79453 4.49367-3.30262 3.74473-.5081-.74895-1.5243-5.24263-1.5243-5.24263z" fill="#3F3D56"/>
                    <path d="M64 46.93023S53.47 31.5814 50.38805 30.81395C47.3061 30.04651 40.3717 28 40.3717 28s-6.9344 1.02325-8.989 2.04651c-2.05462 1.02326-9.75952 2.81395-10.01635 5.88372C21.10953 39 23.421 68.4186 22.13685 71.23256c-1.28415 2.81395-5.65024 29.67442-3.5956 29.16279 2.05463-.51163.51365-7.16278 9.50268-7.4186 8.98902-.25583 13.86878-5.62791 17.20756.76744C48.59026 100.13953 58.09295 105 58.09295 105a61.66717 61.66717 0 0 1 1.02731-6.13954c.7705-3.58138-2.05463-12.27906-2.05463-12.27906s.25683-20.2093 1.28415-22.51163C59.3771 61.76744 64 46.93023 64 46.93023z" fill="#88C9CE"/>
                    <path d="M60.32927 46l3.81995.52055s-.25467 5.20548.76398 6.76712c1.01866 1.56164 2.8013 9.63014 1.78264 9.89042C65.67718 63.43836 56.50933 65 56.50933 65L56 53.0274 60.32927 46z" fill="#88C9CE"/>
                    <path d="M18.5369 56s-2.58905 16.43372-3.88358 18.45633c-1.29453 2.0226-7.76718 30.33917-7.76718 30.33917s-10.64368 14.45405-5.46556 14.20122c5.17811-.25282 10.64368-13.18992 10.64368-13.18992s16.05215-28.56938 16.05215-31.6033C28.11641 71.1696 32 56 32 56H18.5369z" fill="#FFB9B9"/>
                    <path d="M26.34698 33l-4.58294 1.77777s-5.85599 20.8254-4.58295 22.60318 16.54952-.7619 16.80413-1.52381C34.23983 55.09524 31.18453 33 26.34698 33z" fill="#88C9CE"/>
                    </g>
                </g>
            </svg>
        );

        return (
            <Step
                classNames="Eligibility"
                stepNum="Step 1/4"
                title="Enrollment is simple."
                subtitle="Let’s quickly see if you are eligible."
                illustration={illustration}
            >   
            <div>{this.props.isMobile ? 'Is Mobile' : 'Is Not Mobile'}</div>
                <Form className="segment__form" 
                    schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    widgets={widgets}
                    formData={this.state.formData}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleFormSubmit.bind(this)}
                    onError={log("errors")}>

                    <CSSTransition
                        in={this.state.isFormComplete}
                        classNames="slide-up"
                        timeout={1000}
                        unmountOnExit
                    >
                        <div className="segment__actions flex justify-end text-white">
                            <Link to="/applicants" className="button button-xlg primary mt-lg" onClick={() => this.props.transitionToStep("Information")}>
                                <span className="mr-sm">Next</span>
                                Applicant Info
                            </Link>
                        </div>
                    </CSSTransition>
                    
                </Form>

            </Step>
        );
    }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 800,
});

export default withSizes(mapSizesToProps)(Eligibility);