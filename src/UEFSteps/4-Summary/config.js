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
        },
        address: {
            type: "string",
            title: "Address"
        },
        city: {
            type: "string",
            title: "City"
        },
        state: {
            type: "string",
            title: "State"
        },
        zipCode: {
            type: "string",
            title: "Zip Code"
        }
    }
};

export const originalSummaryUISchema = {
    "ui:order": [
        'name',
        'ccNum',
        'ccExp',
        'ccCVC',
        'sameAddress',
        'address',
        'city',
        'state',
        'zipCode'
    ],
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
        classNames: "w-full mb-md separator",
        "ui:widget": "checkbox",
        "ui:options": {
            label: false
        }
    },
    address: {
        condition: 'sameAddress=false',
        classNames: "w-full",
        "ui:widget": "text",
        "ui:title": "Billing address",
        "ui:placeholder": "Address",
    },
    city: {
        condition: 'sameAddress=false',
        classNames: "w-full",
        "ui:widget": "text",
        "ui:placeholder": "City",
        "ui:options": {
            label: false
        }
    },
    state: {
        condition: 'sameAddress=false',
        classNames: "w-1-2 inline-flex",
        "ui:widget": "text",
        "ui:placeholder": "State",
        "ui:options": {
            label: false
        }
    },
    zipCode: {
        condition: 'sameAddress=false',
        classNames: "w-1-2 inline-flex",        
        "ui:widget": "text",
        "ui:placeholder": "Zip Code",
        "ui:options": {
            label: false
        }
    }
};