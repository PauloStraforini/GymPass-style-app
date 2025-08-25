import request from 'supertest'
import { app } from '../../../app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '../../../utils/create-and-authenticate-user'

describe('Create gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to search gyms by title', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Gymper',
        description: 'De São Paulo',
        phoneNumber: '1599999999',
        latitude: -23.5505,
        longitude: -46.6333,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Smart-Fit',
        description: 'De São Paulo',
        phoneNumber: '1599999999',
        latitude: -23.5505,
        longitude: -46.6333,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        q: 'Smart',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Smart-Fit',
      }),
    ])
  })
})
