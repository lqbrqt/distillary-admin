import { mutationField, nonNull } from 'nexus'

export const AnswerUpdateOneMutation = mutationField('updateOneAnswer', {
  type: nonNull('Answer'),
  args: {
    data: nonNull('AnswerUpdateInput'),
    where: nonNull('AnswerWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.answer.update({
      where,
      data,
      ...select,
    })
  },
})
