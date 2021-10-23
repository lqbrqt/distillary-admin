import { mutationField, nonNull } from 'nexus'

export const TestCreateOneMutation = mutationField('createOneTest', {
  type: nonNull('Test'),
  args: {
    data: nonNull('TestCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.test.create({
      data,
      ...select,
    })
  },
})
