export const originalApplicantSchema = {
    type: "object",
    properties: {
        primaryApplicant: {
            title: "Primary Applicant",
            type: "object",
            properties: {
                fullName: {
                    type: "string",
                    title: "Full name"
                },
                dateOfBirth: {
                    type: "string",
                    title: "Date of birth"
                },
                gender: {
                    type: "string",
                    title: "Gender"
                },
                heightFt: {
                    type: "string",
                    title: "Height (ft.)"
                },
                heightIn: {
                    type: "string",
                    title: "Height (in.)"
                },
                weight: {
                    type: "string",
                    title: "Weight"
                }
            }
        },
        spouse: {
            title: "Spouse",
            type: "object",
            properties: {
                fullName: {
                    type: "string",
                    title: "Full name"
                },
                dateOfBirth: {
                    type: "string",
                    title: "Date of birth"
                },
                gender: {
                    type: "string",
                    title: "Gender"
                },
                heightFt: {
                    type: "string",
                    title: "Height (ft.)"
                },
                heightIn: {
                    type: "string",
                    title: "Height (in.)"
                },
                weight: {
                    type: "string",
                    title: "Weight"
                }
            }
        }
    }
};

export const originalApplicantUISchema = {
    primaryApplicant: {
        "ui:order": [
            "fullName",
            "dateOfBirth",
            "gender",
            "heightFt",
            "heightIn",
            "weight"
        ],
        fullName: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "Your lovely full name",
            "ui:options": {
                label: false
            }
        },
        dateOfBirth: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 03/19/1986",
            "ui:options": {
                label: false
            }
        },
        gender: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. Female",
            "ui:options": {
                label: false
            }
        },
        heightFt: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 5 ft.",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 10 in.",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "160 lbs.",
            "ui:options": {
                label: false
            }
        }
    },
    spouse: {
        "ui:order": [
            "fullName",
            "dateOfBirth",
            "gender",
            "heightFt",
            "heightIn",
            "weight"
        ],
        fullName: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "Your lovely full name",
            "ui:options": {
                label: false
            }
        },
        dateOfBirth: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 03/19/1986",
            "ui:options": {
                label: false
            }
        },
        gender: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. Female",
            "ui:options": {
                label: false
            }
        },
        heightFt: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 5 ft.",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 10 in.",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "160 lbs.",
            "ui:options": {
                label: false
            }
        }
    }
};