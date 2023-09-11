import fastifyCors from '@fastify/cors';
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastify from 'fastify';
import { userRoutes } from "./src/routes/users/user.routes";
import { swaggerOptions, swaggerUiOptions } from './swagger.config';

const server = fastify();
const PORT = 8080;

server.register(fastifyCors, {
    origin: '*',
    credentials: true,
});

server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})


server.register(userRoutes);

server.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})