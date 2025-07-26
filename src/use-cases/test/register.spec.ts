import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  it('should hash user password', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johdddn.doe@example.com',
      password: 'pasdddsword123',
    })

    const isPasswordCorrectHashed = await compare(
      'pasdddsword123',
      user.password_hash,
    )

    expect(isPasswordCorrectHashed).toBe(true)
  })
})
