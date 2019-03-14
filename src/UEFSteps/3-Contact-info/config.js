export const originalContactSchema = {
    type: "object",
    properties: {
        address: {
            title: "Where do you reside?",
            type: "object",
            properties: {
                street: {
                    type: "string",
                    title: "Home address"
                }
            }
        },
        contacts: {
            title: "What's the best number to reach you?",
            type: "object",
            properties: {
                primaryPhone: {
                    type: "string",
                    title: "Phone"
                },
                primaryEmail: {
                    type: "string",
                    title: "Email"
                },
                spousePhone: {
                    type: "string",
                    title: "Spouse's phone"
                },
                spouseEmail: {
                    type: "string",
                    title: "Spouse's email"
                }
            }
        },
        createLogin: {
            title: "Create a secure login",
            type: "object",
            properties: {
                email: {
                    type: "string",
                    title: "Email"
                },
                password: {
                    type: "string",
                    title: "Password"
                },
                agreeToTerms: {
                    type: "boolean",
                    title: "I agree to the terms of service"
                }
            }
        }
    }

}

export const originalContactUISchema = {
    address: {
        street: {
            classNames: " mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "hola",
            "ui:options": {
                label: false
            } 
        }
    },
    contacts: {
        primaryPhone: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "hola",
            "ui:options": {
                label: false
            }
        },
        primaryEmail: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "hola",
            "ui:options": {
                label: false
            }
        },
        spousePhone: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "hola",
            "ui:options": {
                label: false
            }
        },
        spouseEmail: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "hola",
            "ui:options": {
                label: false
            }
        }
    },
    createLogin: {
        email: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "mia mia",
            "ui:options": {
                label: false
            }
        },
        password: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "text",
            "ui:placeholder": "mia mia",
            "ui:options": {
                label: false
            }
        },
        agreeToTerms: {
            classNames: "w-1-2 inline-flex mb-lg",
            "ui:widget": "checkbox",
            "ui:placeholder": "mia mia",
            "ui:options": {
                label: false
            }
        }
    }
}