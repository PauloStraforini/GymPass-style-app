import { FetchNearbyUseCase } from '../test/fetch-nearby-gyms'
import { PrismaGymsRepository } from '../../repositories/prisma/prisma-gyms-repository'

export function makeFeatchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const UseCase = new FetchNearbyUseCase(gymsRepository)

  return UseCase
}
