import { mutationField, nonNull } from 'nexus'

export const AnswerUpsertOneMutation = mutationField('upsertOneAnswer', {
  type: nonNull('Answer'),
  args: {
    where: nonNull('AnswerWhereUniqueInput'),
    create: nonNull('AnswerCreateInput'),
    update: nonNull('AnswerUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.answer.upsert({
      ...args,
      ...select,
    })
  },
})
