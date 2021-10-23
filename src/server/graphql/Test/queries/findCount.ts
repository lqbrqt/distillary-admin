import { queryField, nonNull, list } from 'nexus'

export const TestFindCountQuery = queryField('findManyTestCount', {
  type: nonNull('Int'),
  args: {
    where: 'TestWhereInput',
    orderBy: list('TestOrderByWithRelationInput'),
    cursor: 'TestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.test.count(args as any)
  },
})
