import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getUserHandler, postUserHandler } from "./user.handlers";
import { User } from "./user.schemas";


export const userRoutes = (server: FastifyInstance, options: FastifyPluginOptions, done: (err?: Error | undefined) => void) => {
    server.post('/user', {
        schema: {
            tags: ["Users"],
            body: {
                ...User
            },
            response: {
                201: {
                    description: "Successful creation",
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                    }
                },
            },
        },
        handler: postUserHandler,
    });
    server.get('/user/:id', {
        schema: {
            tags: ["Users"],
            params: {
                type: 'object',
                additionalProperties: false,
                required: ['id'],
                properties: { id: { type: 'string' } }
            },
            response: {
                200: {
                    description: "Succesful response",
                    ...User
                },
            },
        },
        handler: getUserHandler
    });
    done()
}