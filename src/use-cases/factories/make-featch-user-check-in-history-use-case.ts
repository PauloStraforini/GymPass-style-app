import { PrismaCheckInsRepository } from '../../repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../../use-cases/test/fetch-user-check-in-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const UseCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

  return UseCase
}
