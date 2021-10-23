import { mutationField, nonNull } from 'nexus'

export const CompleteTestDeleteOneMutation = mutationField(
  'deleteOneCompleteTest',
  {
    type: 'CompleteTest',
    args: {
      where: nonNull('CompleteTestWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.completeTest.delete({
        where,
        ...select,
      })
    },
  },
)
