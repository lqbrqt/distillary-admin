import { mutationField, nonNull } from 'nexus'

export const CompleteTestUpsertOneMutation = mutationField(
  'upsertOneCompleteTest',
  {
    type: nonNull('CompleteTest'),
    args: {
      where: nonNull('CompleteTestWhereUniqueInput'),
      create: nonNull('CompleteTestCreateInput'),
      update: nonNull('CompleteTestUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.completeTest.upsert({
        ...args,
        ...select,
      })
    },
  },
)
