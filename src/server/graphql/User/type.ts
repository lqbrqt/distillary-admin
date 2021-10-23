import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('nickname')
    t.string('phoneNumber')
    t.list.field('completedTests', {
      type: 'CompleteTest',
      args: {
        where: 'CompleteTestWhereInput',
        orderBy: 'CompleteTestOrderByWithRelationInput',
        cursor: 'CompleteTestWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CompleteTestScalarFieldEnum',
      },
      resolve(root: any) {
        return root.completedTests
      },
    })
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
