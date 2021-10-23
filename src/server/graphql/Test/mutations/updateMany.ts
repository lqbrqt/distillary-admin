import { mutationField, nonNull } from 'nexus'

export const TestUpdateManyMutation = mutationField('updateManyTest', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('TestUpdateManyMutationInput'),
    where: 'TestWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.test.updateMany(args as any)
  },
})
