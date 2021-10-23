import { mutationField, nonNull } from 'nexus'

export const TestDeleteManyMutation = mutationField('deleteManyTest', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TestWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.test.deleteMany({ where } as any)
  },
})
