import { InMemoryGymsRepository } from '../../repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymUseCase } from './search-gyms'

let GymsRepository: InMemoryGymsRepository
let sut: SearchGymUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    GymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymUseCase(GymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await GymsRepository.create({
      title: 'Gimper 01',
      description: null,
      phoneNumber: null,
      latitude: -23.5505,
      longitude: -46.6333,
    })
    await GymsRepository.create({
      title: 'Moviment Gym',
      description: null,
      phoneNumber: null,
      latitude: -23.5505,
      longitude: -46.6333,
    })

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Moviment Gym' })])
  })

  it('should be able to fetch paginated gym search results', async () => {
    for (let i = 1; i <= 22; i++) {
      await GymsRepository.create({
        title: `Movimento Gym ${i}`,
        description: null,
        phoneNumber: null,
        latitude: -23.5505,
        longitude: -46.6333,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Movimento Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Movimento Gym 21' }),
      expect.objectContaining({ title: 'Movimento Gym 22' }),
    ])
  })
})
