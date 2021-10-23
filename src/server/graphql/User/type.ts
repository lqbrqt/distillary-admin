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
    t.list.field('answers', {
      type: 'Answer',
      args: {
        where: 'AnswerWhereInput',
        orderBy: 'AnswerOrderByWithRelationInput',
        cursor: 'AnswerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AnswerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.answers
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
