import { queryField, list } from 'nexus'

export const CompleteTestFindFirstQuery = queryField('findFirstCompleteTest', {
  type: 'CompleteTest',
  args: {
    where: 'CompleteTestWhereInput',
    orderBy: list('CompleteTestOrderByWithRelationInput'),
    cursor: 'CompleteTestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CompleteTestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.completeTest.findFirst({
      ...args,
      ...select,
    })
  },
})
