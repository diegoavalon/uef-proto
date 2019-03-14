export const originalApplicantSchema = {
    type: "object",
    properties: {
        primaryFullName: {
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
};

export const originalApplicantUISchema = {
    primaryFullName: {
        "ui:widget": "text",
        "ui:placeholder": "Your lovely full name",
        "ui:options": {
            label: false
        }
    },
    dateOfBirth: {
        "ui:widget": "text",
        "ui:placeholder": "eg. 03/19/1986",
        "ui:options": {
            label: false
        }
    },
    gender: {
        "ui:widget": "text",
        "ui:placeholder": "eg. Female",
        "ui:options": {
            label: false
        }
    },
    heightFt: {
        "ui:widget": "text",
        "ui:placeholder": "eg. 5 ft.",
        "ui:options": {
            label: false
        }
    },
    heightIn: {
        "ui:widget": "text",
        "ui:placeholder": "eg. 10 in.",
        "ui:options": {
            label: false
        }
    },
    weight: {
        "ui:widget": "text",
        "ui:placeholder": "160 lbs.",
        "ui:options": {
            label: false
        }
    },
};