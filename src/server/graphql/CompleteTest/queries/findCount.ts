import { queryField, nonNull, list } from 'nexus'

export const CompleteTestFindCountQuery = queryField(
  'findManyCompleteTestCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CompleteTestWhereInput',
      orderBy: list('CompleteTestOrderByWithRelationInput'),
      cursor: 'CompleteTestWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('CompleteTestScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.completeTest.count(args as any)
    },
  },
)
