export const originalSummarySchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            title: "Name"
        },
        ccNum: {
            type: "number",
            title: "Card number"
        },
        ccExp: {
            type: "string",
            title: "Expiration"
        },
        ccCVC: {
            type: "number",
            title: "CVC"
        },
        sameAddress: {
            type: "boolean",
            title: "Same as application address?"
        }
    }
};

export const originalSummaryUISchema = {
    name: {
        classNames: "w-full",
        "ui:widget": "text",
        "ui:placeholder": "Your lovely name",
        "ui:options": {
            label: false
        }
    },
    ccNum: {
        classNames: "w-full",
        "ui:widget": "text",
        "ui:placeholder": "1234 1234 1234 1234",
        "ui:options": {
            label: false
        }
    },
    ccExp: {
        classNames: "w-1-2 inline-flex",
        "ui:widget": "text",
        "ui:placeholder": "MM/YY",
        "ui:options": {
            label: false
        }
    },
    ccCVC: {
        classNames: "w-1-2 inline-flex",
        "ui:widget": "text",
        "ui:placeholder": "CVC",
        "ui:options": {
            label: false
        }
    },
    sameAddress: {
        classNames: "w-full",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false
        }
    }
};