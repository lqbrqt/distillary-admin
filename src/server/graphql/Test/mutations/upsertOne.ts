import { mutationField, nonNull } from 'nexus'

export const TestUpsertOneMutation = mutationField('upsertOneTest', {
  type: nonNull('Test'),
  args: {
    where: nonNull('TestWhereUniqueInput'),
    create: nonNull('TestCreateInput'),
    update: nonNull('TestUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.test.upsert({
      ...args,
      ...select,
    })
  },
})
