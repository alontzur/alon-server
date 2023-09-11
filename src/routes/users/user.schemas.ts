export const User = {
    type: "object",
    properties: {
        id: {
            type: "string",
        },
        name: {
            type: "string",
        },
        email: {
            type: "string"
        }
    },
    required: ["name", "email"],
}