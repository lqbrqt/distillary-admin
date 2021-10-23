import { mutationField, nonNull } from 'nexus'

export const CompleteTestUpdateOneMutation = mutationField(
  'updateOneCompleteTest',
  {
    type: nonNull('CompleteTest'),
    args: {
      data: nonNull('CompleteTestUpdateInput'),
      where: nonNull('CompleteTestWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.completeTest.update({
        where,
        data,
        ...select,
      })
    },
  },
)
