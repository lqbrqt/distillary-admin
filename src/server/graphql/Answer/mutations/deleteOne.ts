import { mutationField, nonNull } from 'nexus'

export const AnswerDeleteOneMutation = mutationField('deleteOneAnswer', {
  type: 'Answer',
  args: {
    where: nonNull('AnswerWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.answer.delete({
      where,
      ...select,
    })
  },
})
