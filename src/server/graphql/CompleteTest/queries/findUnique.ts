import { queryField, nonNull } from 'nexus'

export const CompleteTestFindUniqueQuery = queryField(
  'findUniqueCompleteTest',
  {
    type: 'CompleteTest',
    args: {
      where: nonNull('CompleteTestWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.completeTest.findUnique({
        where,
        ...select,
      })
    },
  },
)
