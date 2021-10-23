import { queryField, nonNull, list } from 'nexus'

export const AnswerFindCountQuery = queryField('findManyAnswerCount', {
  type: nonNull('Int'),
  args: {
    where: 'AnswerWhereInput',
    orderBy: list('AnswerOrderByWithRelationInput'),
    cursor: 'AnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('AnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.answer.count(args as any)
  },
})
