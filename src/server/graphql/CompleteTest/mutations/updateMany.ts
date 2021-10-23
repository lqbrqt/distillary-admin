import { mutationField, nonNull } from 'nexus'

export const CompleteTestUpdateManyMutation = mutationField(
  'updateManyCompleteTest',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('CompleteTestUpdateManyMutationInput'),
      where: 'CompleteTestWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.completeTest.updateMany(args as any)
    },
  },
)
