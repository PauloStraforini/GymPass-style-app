import { profile } from './controllers/users/profile'
import { authenticate } from './controllers/users/authenticate'
import { register } from './controllers/users/register'
import { FastifyInstance } from 'fastify'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
