import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '../../repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should to register', async () => {
    const { gym } = await sut.execute({
      title: 'Gym 01',
      description: null,
      phoneNumber: null,
      latitude: -23.5505,
      longitude: -46.6333,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
