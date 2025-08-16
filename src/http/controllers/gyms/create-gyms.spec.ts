import request from 'supertest'
import { app } from '../../../app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '../../../utils/create-and-authenticate-user'

describe('Create gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const response = await request(app.server)
      .get('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Gymper',
        description: 'De São Paulo',
        phoneNumber: '1599999999',
        latitude: -23.5505,
        longitude: -46.6333,
      })
    expect(response.statusCode).toEqual(201)
  })
})
