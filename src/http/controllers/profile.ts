import { FastifyReply, FastifyRequest } from 'fastify'
export async function profile(request: FastifyRequest, reply: FastifyReply) {
  //   try {
  //     const usersRepository = new PrismaUsersRepository()
  //     const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  //     await authenticateUseCase.execute({
  //       email,
  //       password,
  //     })
  //   } catch (err) {
  //     if (err instanceof InvalidCredentialsError) {
  //       return reply.status(409).send({ message: err.message })
  //     }

  //     throw err
  //   }

  return reply.status(201).send()
}
