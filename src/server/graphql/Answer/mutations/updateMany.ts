import { mutationField, nonNull } from 'nexus'

export const AnswerUpdateManyMutation = mutationField('updateManyAnswer', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('AnswerUpdateManyMutationInput'),
    where: 'AnswerWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.answer.updateMany(args as any)
  },
})
