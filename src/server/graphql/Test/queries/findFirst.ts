import { queryField, list } from 'nexus'

export const TestFindFirstQuery = queryField('findFirstTest', {
  type: 'Test',
  args: {
    where: 'TestWhereInput',
    orderBy: list('TestOrderByWithRelationInput'),
    cursor: 'TestWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TestScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.test.findFirst({
      ...args,
      ...select,
    })
  },
})
