import { PrismaCheckInsRepository } from '../../repositories/prisma/prisma-check-ins-repository'
import { GetUserMetricsUseCase } from '../test/get-user-metrics'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const UseCase = new GetUserMetricsUseCase(checkInsRepository)
  return UseCase
}
