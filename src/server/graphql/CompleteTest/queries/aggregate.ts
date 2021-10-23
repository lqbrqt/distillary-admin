import { queryField, list } from 'nexus'

export const CompleteTestAggregateQuery = queryField('aggregateCompleteTest', {
  type: 'AggregateCompleteTest',
  args: {
    where: 'CompleteTestWhereInput',
    orderBy: list('CompleteTestOrderByWithRelationInput'),
    cursor: 'CompleteTestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.completeTest.aggregate({ ...args, ...select }) as any
  },
})
