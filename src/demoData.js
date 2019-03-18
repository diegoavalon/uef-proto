import Eligibility from './UEFSteps/1-Eligibility/Eligibility';
import Applicant from './UEFSteps/2-Applicant-Info/Applicant';

export const demoData = {
    steps: [{
        index: 0,
        stepNumText: "Step 1/4",
        title: "Enrollment is simple.",
        subtitle: "Let’s quickly see if you are eligible.",
        component: Eligibility
    }, {
        index: 1,
        stepNumText: "Step 2/4",
        title: "Who will be on this policy?",
        subtitle: "We'll walk you through everything you need to have your family enrolled under this plan.",
        component: Applicant
    }]
};