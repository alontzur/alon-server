"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const swagger_config_1 = require("./swagger.config");
const server = (0, fastify_1.default)();
server.register(swagger_1.default, swagger_config_1.swaggerOptions);
server.register(swagger_ui_1.default, swagger_config_1.swaggerUiOptions);
server.get('/ping', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
}));
server.register((server, options, done) => {
    server.post("/", {
        schema: {
            tags: ["Default"],
            body: {
                $ref: "#/definitions/User"
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        anything: { type: "string" },
                    },
                },
            },
        },
        handler: (req, res) => {
            res.send({ anything: "meaningfull" });
        },
    });
    done();
});
server.ready().then(() => {
    console.log('successfully booted!');
}, (err) => {
    console.log('an error happened', err);
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=index.js.map