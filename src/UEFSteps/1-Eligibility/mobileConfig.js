export const originalEligibilityMobileSchema = {
    type: "object",
    properties: {
        hasBeenDeclinedInsurance: {
            type: "boolean",
            title: "Declination of Insurance:Has any applicant been declined for insurance due to health reasons?",
        },
        isUSACitizen: {
            type: "boolean",
            title: "Non-US Resident:Has any applicant lived in the 50 states of the USA or the District of Columbia for less than the past 12 months?"
        },
        isPregnant: {
            type: "boolean",
            title: "Expecting a Baby?:Are you or any family member an expectant mother/father, in the process of adopting a child, or undergoing infertility treatment?",
        },
        previousCondition: {
            type: "boolean",
            title: "Pre-existing Conditions:Within the last 5 years, has any applicant received medical or surgical consultation, advice, or treatment, including medication, for any of the following: blood disorders, liver disorders, kidney disorders, chronic obstructive pulmonary disorder (COPD) or emphysema, diabetes, cancer, multiple sclerosis, heart or circulatory system disorders (excluding high blood pressure), Crohn’s disease or ulcerative colitis, or alcohol or drug abuse?",
        },
        pendingCondition: {
            type: "boolean",
            title: "Pending Health Condition:Has any applicant had testing performed and has not received results, or been advised by a medical professional to have treatment, testing, or surgery that has not been performed?",
        },
        hasHIV: {
            type: "boolean",
            title: "HIV/AIDS Diagnosis:Within the last 5 years, has any applicant received treatment, advice, medication, or surgical consultation for HIV infection from a doctor or other licensed clinical professional, or had a positive test for HIV infection performed by a doctor or other licensed clinical professional?",
        },
        existingInsurance: {
            type: "boolean",
            title: "Existing Health Plan:Does any applicant now have hospital or medical expense insurance that will not terminate prior to the requested effective date?",
        }
    }
};

export const originalEligibilityMobileUISchema = {
    "ui:order": [
        'isUSACitizen',
        'isPregnant',
        'hasBeenDeclinedInsurance',
        'previousCondition',
        'pendingCondition',
        'hasHIV',
        'existingInsurance'
    ],
    isUSACitizen: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "flag",
            title: "Non-US Resident",
            description: "Has any applicant lived in the 50 states of the USA or the District of Columbia for less than the past 12 months?"
        }
    },
    isPregnant: {
        condition: 'isUSACitizen=true||isUSACitizen=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "child_friendly",
            title: "Expecting a Baby?",
            description: "Are you or any family member an expectant mother/father, in the process of adopting a child, or undergoing infertility treatment?",
        }
    },
    hasBeenDeclinedInsurance: {
        condition: 'isPregnant=true||isPregnant=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "sentiment_dissatisfied",
            title: "Declination of Insurance",
            description: "Has any applicant been declined for insurance due to health reasons?",
        }
    },
    previousCondition: {
        condition: 'hasBeenDeclinedInsurance=true||hasBeenDeclinedInsurance=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "healing",
            title: "Pre-existing Conditions",
            description: "Within the last 5 years, has any applicant been diagnosed or treated for any of the following: blood, liver, kidney, chronic obstructive pulmonary disorders?",
        }
    },
    pendingCondition: {
        condition: 'previousCondition=true||previousCondition=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "calendar_today",
            title: "Pending Health Condition",
            description: "Has any applicant been advised by a medical professional to have treatment, testing, or surgery that has not been performed?",
        }
    },
    hasHIV: {
        condition: 'pendingCondition=true||pendingCondition=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "help",
            title: "HIV/AIDS Diagnosis",
            description: "Within the last 5 years, has any applicant received treatment, advice, medication, or surgical consultation for HIV infection from a doctor or other licensed clinical professional, or had a positive test for HIV infection performed by a doctor or other licensed clinical professional?",
        }
    },
    existingInsurance: {
        condition: 'hasHIV=true||hasHIV=false',
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "radio",
        "ui:options": {
            label: false,
            questionFancy: true,
            selectableCard: true,
            icon: "assignment_ind",
            title: "Existing Health Plan",
            description: "Does any applicant now have hospital or medical expense insurance that will not terminate prior to the requested effective date?",
        }
    }
};