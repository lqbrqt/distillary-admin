import { objectType } from 'nexus'

export const Test = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Test',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('questions', {
      type: 'Question',
      args: {
        where: 'QuestionWhereInput',
        orderBy: 'QuestionOrderByWithRelationInput',
        cursor: 'QuestionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'QuestionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.questions
      },
    })
    t.nullable.field('_count', {
      type: 'TestCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
