import { objectType } from 'nexus'

export const Question = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Question',
  definition(t) {
    t.int('id')
    t.field('type', { type: 'QuestionType' })
    t.string('text')
    t.nullable.string('answer')
    t.list.string('options')
    t.list.string('codeArgs')
    t.nullable.string('expectedResult')
    t.field('parrentTest', {
      type: 'Test',
      resolve(root: any) {
        return root.parrentTest
      },
    })
    t.int('parrentTestId')
    t.list.field('competeAnswers', {
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
        return root.competeAnswers
      },
    })
    t.nullable.int('timeToComplete')
    t.nullable.field('_count', {
      type: 'QuestionCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
