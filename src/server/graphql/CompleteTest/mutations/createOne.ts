import { mutationField, nonNull } from 'nexus'

export const CompleteTestCreateOneMutation = mutationField(
  'createOneCompleteTest',
  {
    type: nonNull('CompleteTest'),
    args: {
      data: nonNull('CompleteTestCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.completeTest.create({
        data,
        ...select,
      })
    },
  },
)
