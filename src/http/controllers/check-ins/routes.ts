import { FastifyInstance } from 'fastify'
import { verifyJWT } from '../../middlewares/verify-jwt'
import { create } from './create-check-in'
import { validate } from './validate-check-in'
import { history } from './history-check-in'
import { metrics } from './metrics-check-in'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('check-ins/history', history)
  app.get('check-ins/metrics', metrics)

  app.post('/gyms/:gyms/check-is', create)
  app.patch('/check-ins/:checkInId/validate', validate)
}
