import { queryField, nonNull } from 'nexus'

export const AnswerFindUniqueQuery = queryField('findUniqueAnswer', {
  type: 'Answer',
  args: {
    where: nonNull('AnswerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.answer.findUnique({
      where,
      ...select,
    })
  },
})
