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
                    type: "integer",
                    title: "Height (ft.)",
                    enum: [3,4,5,6,7]
                },
                heightIn: {
                    type: "integer",
                    title: "Height (in.)",
                    enum: [1,2,3,4,5,6,7,8,9,10,11]
                },
                weight: {
                    type: "integer",
                    title: "Weight (lbs.)",
                    minimum: 50,
                    maximum: 700
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
                    type: "number",
                    title: "Height (ft.)",
                    enum: [3,4,5,6,7]
                },
                heightIn: {
                    type: "number",
                    title: "Height (in.)",
                    enum: [1,2,3,4,5,6,7,8,9,10,11]
                },
                weight: {
                    type: "integer",
                    title: "Weight (lbs.)",
                    minimum: 50,
                    maximum: 700
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
            "ui:placeholder": "Choose an option",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:placeholder": "Choose an option",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "eg. 163",
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
            "ui:placeholder": "Choose an option",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-4 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "Choose an option",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "eg. 160",
            "ui:options": {
                label: false
            }
        }
    }
};