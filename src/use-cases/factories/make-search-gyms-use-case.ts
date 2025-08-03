import { SearchGymUseCase } from '../test/search-gyms'
import { PrismaGymsRepository } from '../../repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const UseCase = new SearchGymUseCase(checkInsRepository)

  return UseCase
}
