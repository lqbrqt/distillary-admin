import { objectType } from 'nexus'

export const CompleteTest = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CompleteTest',
  definition(t) {
    t.int('id')
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
    t.int('rightAnswers')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
    t.nullable.field('_count', {
      type: 'CompleteTestCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
