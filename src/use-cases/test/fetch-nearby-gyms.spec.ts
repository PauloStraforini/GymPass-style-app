import { InMemoryGymsRepository } from '../../repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { FetchNearbyUseCase } from './fetch-nearby-gyms'

let GymsRepository: InMemoryGymsRepository
let sut: FetchNearbyUseCase

describe('Search Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    GymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyUseCase(GymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await GymsRepository.create({
      title: 'Nearby Gym 01',
      description: null,
      phoneNumber: null,
      latitude: -23.5505,
      longitude: -46.6333,
    })
    await GymsRepository.create({
      title: 'Karei Gym 02',
      description: null,
      phoneNumber: null,
      latitude: -23.8555,
      longitude: -49.6333,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.5505,
      userLongitude: -46.6333,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Nearby Gym 01' })])
  })
})
