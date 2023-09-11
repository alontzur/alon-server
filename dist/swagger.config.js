"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiOptions = exports.swaggerOptions = void 0;
const user_schemas_1 = require("./src/users/user.schemas");
exports.swaggerOptions = {
    swagger: {
        info: {
            title: "My Title",
            description: "My Description.",
            version: "1.0.0",
        },
        host: "localhost",
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        definitions: {
            User: user_schemas_1.User
        }
    },
};
exports.swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};
//# sourceMappingURL=swagger.config.js.map