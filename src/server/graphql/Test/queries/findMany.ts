import { queryField, nonNull, list } from 'nexus'

export const TestFindManyQuery = queryField('findManyTest', {
  type: nonNull(list(nonNull('Test'))),
  args: {
    where: 'TestWhereInput',
    orderBy: list('TestOrderByWithRelationInput'),
    cursor: 'TestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.test.findMany({
      ...args,
      ...select,
    })
  },
})
