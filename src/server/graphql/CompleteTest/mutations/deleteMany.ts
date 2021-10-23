import { mutationField, nonNull } from 'nexus'

export const CompleteTestDeleteManyMutation = mutationField(
  'deleteManyCompleteTest',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CompleteTestWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.completeTest.deleteMany({ where } as any)
    },
  },
)
