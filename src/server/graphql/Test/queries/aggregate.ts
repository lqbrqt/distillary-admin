import { queryField, list } from 'nexus'

export const TestAggregateQuery = queryField('aggregateTest', {
  type: 'AggregateTest',
  args: {
    where: 'TestWhereInput',
    orderBy: list('TestOrderByWithRelationInput'),
    cursor: 'TestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.test.aggregate({ ...args, ...select }) as any
  },
})
