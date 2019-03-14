import { EhBanner } from "../../widgets";

export const originalEligibilitySchema = {
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
        },
        ineligibleAlert: {
            type: "string"
        }
    }
};

export const originalEligibilityUISchema = {
    "ui:order": [
        'isUSACitizen',
        'isPregnant',
        'hasBeenDeclinedInsurance',
        'previousCondition',
        'pendingCondition',
        'hasHIV',
        'existingInsurance',
        'ineligibleAlert'
    ],
    hasBeenDeclinedInsurance: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Declination of Insurance",
            description: "Has any applicant been declined for insurance due to health reasons?",
        }
    },
    isUSACitizen: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Non-US Resident",
            description: "Has any applicant lived in the 50 states of the USA or the District of Columbia for less than the past 12 months?"
        }
    },
    isPregnant: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Expecting a Baby?",
            description: "Are you or any family member an expectant mother/father, in the process of adopting a child, or undergoing infertility treatment?",
        }
    },
    previousCondition: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Pre-existing Conditions",
            description: "Within the last 5 years, has any applicant received medical or surgical consultation, advice, or treatment, including medication, for any of the following: blood disorders, liver disorders, kidney disorders, chronic obstructive pulmonary disorder (COPD) or emphysema, diabetes, cancer, multiple sclerosis, heart or circulatory system disorders (excluding high blood pressure), Crohn’s disease or ulcerative colitis, or alcohol or drug abuse?",
        }
    },
    pendingCondition: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Pending Health Condition",
            description: "Has any applicant had testing performed and has not received results, or been advised by a medical professional to have treatment, testing, or surgery that has not been performed?",
        }
    },
    hasHIV: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "HIV/AIDS Diagnosis",
            description: "Within the last 5 years, has any applicant received treatment, advice, medication, or surgical consultation for HIV infection from a doctor or other licensed clinical professional, or had a positive test for HIV infection performed by a doctor or other licensed clinical professional?",
        }
    },
    existingInsurance: {
        classNames: "toggle-fancy__wrapper",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false,
            toggleFancy: true,
            title: "Existing Health Plan",
            description: "Does any applicant now have hospital or medical expense insurance that will not terminate prior to the requested effective date?",
        }
    },
    ineligibleAlert: {
        condition: 'isUSACitizen=true||isPregnant=true||hasBeenDeclinedInsurance=true||previousCondition=true||pendingCondition=true||hasHIV=true||existingInsurance=true||ineligibleAlert=true',
        "ui:widget": EhBanner,
        "ui:options": {
            label: false,
            isModal: true,
            title: "Based on your answer, you are likely ineligible for this plan",
            text: 'Please call 1-844-229-4337 and let our licensed agents to help find other coverage tailored for you.'
        }
    }
};