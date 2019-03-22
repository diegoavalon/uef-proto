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
                    minimum: 3,
                    maximum: 7,
                    title: "Height (ft.)"
                },
                heightIn: {
                    type: "integer",
                    minimum: 1,
                    maximum: 11,
                    title: "Height (in.)"
                },
                weight: {
                    type: "integer",
                    minimum: 42,
                    maximum: 700,
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
                    type: "integer",
                    minimum: 3,
                    maximum: 7,
                    title: "Height (ft.)"
                },
                heightIn: {
                    type: "integer",
                    minimum: 1,
                    maximum: 11,
                    title: "Height (in.)"
                },
                weight: {
                    type: "integer",
                    minimum: 42,
                    maximum: 700,
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
            classNames: "w-full md:w-1-2 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "Your lovely full name",
            "ui:options": {
                label: false
            }
        },
        dateOfBirth: {
            classNames: "w-1-2 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 03/19/1986",
            "ui:options": {
                label: false
            }
        },
        gender: {
            classNames: "w-1-2 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. Female",
            "ui:options": {
                label: false
            }
        },
        heightFt: {
            classNames: "w-1-3 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "5 ft.",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-3 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "10 in.",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-3 md:w-1-2 inline-flex md:mb-lg",
            "ui:widget": "updown",
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
            classNames: "w-full md:w-1-2 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "Your lovely full name",
            "ui:options": {
                label: false
            }
        },
        dateOfBirth: {
            classNames: "w-1-2 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. 03/19/1986",
            "ui:options": {
                label: false
            }
        },
        gender: {
            classNames: "w-1-2 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "eg. Female",
            "ui:options": {
                label: false
            }
        },
        heightFt: {
            classNames: "w-1-3 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "5 ft.",
            "ui:options": {
                label: false
            }
        },
        heightIn: {
            classNames: "w-1-3 md:w-1-4 inline-flex md:mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "10 in.",
            "ui:options": {
                label: false
            }
        },
        weight: {
            classNames: "w-1-3 md:w-1-2 inline-flex md:mb-lg",
            "ui:widget": "updown",
            "ui:placeholder": "160 lbs.",
            "ui:options": {
                label: false
            }
        }
    }
};