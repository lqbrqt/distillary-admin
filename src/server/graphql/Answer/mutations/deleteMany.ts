import { mutationField, nonNull } from 'nexus'

export const AnswerDeleteManyMutation = mutationField('deleteManyAnswer', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'AnswerWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.answer.deleteMany({ where } as any)
  },
})
