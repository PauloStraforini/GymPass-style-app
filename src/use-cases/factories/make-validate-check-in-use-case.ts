import { ValidateCheckInUseCase } from '../test/validate-check-in'
import { PrismaCheckInsRepository } from '../../repositories/prisma/prisma-check-ins-repository'

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const UseCase = new ValidateCheckInUseCase(checkInsRepository)

  return UseCase
}
