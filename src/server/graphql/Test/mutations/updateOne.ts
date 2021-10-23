import { mutationField, nonNull } from 'nexus'

export const TestUpdateOneMutation = mutationField('updateOneTest', {
  type: nonNull('Test'),
  args: {
    data: nonNull('TestUpdateInput'),
    where: nonNull('TestWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.test.update({
      where,
      data,
      ...select,
    })
  },
})
