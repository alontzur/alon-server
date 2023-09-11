import { FastifyRequest, FastifyReply } from "fastify"

export const getUserHandler = async (req: any, reply: FastifyReply) => {
    try {
        const user = {
            id: req.params?.id,
            name: 'alon',
            email: 'blabla@gmail.com'
        }
        reply.send(user)
    } catch (err) {
        
    }
}

export const postUserHandler = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
        return {id: '123'}
    } catch (err) {
        
    }
}