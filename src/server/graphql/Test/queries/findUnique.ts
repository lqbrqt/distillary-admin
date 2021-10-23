import { queryField, nonNull } from 'nexus'

export const TestFindUniqueQuery = queryField('findUniqueTest', {
  type: 'Test',
  args: {
    where: nonNull('TestWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.test.findUnique({
      where,
      ...select,
    })
  },
})
