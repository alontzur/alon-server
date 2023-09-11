import { SwaggerOptions } from '@fastify/swagger';

export const swaggerOptions: SwaggerOptions = {
    swagger: {
        info: {
            title: "My Title",
            description: "My Description.",
            version: "1.0.0",
        },
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
    },
};

export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};