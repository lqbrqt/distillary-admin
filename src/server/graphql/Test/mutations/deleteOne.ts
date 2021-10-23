import { mutationField, nonNull } from 'nexus'

export const TestDeleteOneMutation = mutationField('deleteOneTest', {
  type: 'Test',
  args: {
    where: nonNull('TestWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.test.delete({
      where,
      ...select,
    })
  },
})
