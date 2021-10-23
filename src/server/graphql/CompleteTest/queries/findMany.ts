import { queryField, nonNull, list } from 'nexus'

export const CompleteTestFindManyQuery = queryField('findManyCompleteTest', {
  type: nonNull(list(nonNull('CompleteTest'))),
  args: {
    where: 'CompleteTestWhereInput',
    orderBy: list('CompleteTestOrderByWithRelationInput'),
    cursor: 'CompleteTestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CompleteTestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.completeTest.findMany({
      ...args,
      ...select,
    })
  },
})
