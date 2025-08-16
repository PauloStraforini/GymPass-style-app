import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeSearchGymsUseCase } from '../../../use-cases/factories/make-search-gyms-use-case'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchGymBodySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { query, page } = searchGymBodySchema.parse(request.query)

  const searchGymUseCase = makeSearchGymsUseCase()

  await searchGymUseCase.execute({
    page,
    query,
  })

  return reply.status(201).send()
}
