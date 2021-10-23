import { queryField, list } from 'nexus'

export const AnswerFindFirstQuery = queryField('findFirstAnswer', {
  type: 'Answer',
  args: {
    where: 'AnswerWhereInput',
    orderBy: list('AnswerOrderByWithRelationInput'),
    cursor: 'AnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('AnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.answer.findFirst({
      ...args,
      ...select,
    })
  },
})
