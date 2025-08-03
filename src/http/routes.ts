import { profile } from './controllers/profile'
import { authenticate } from '../http/controllers/authenticate'
import { register } from '../http/controllers/register'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.get('/me', profile)
}
