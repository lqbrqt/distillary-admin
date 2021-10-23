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
    t.nullable.string('code')
    t.field('parrentTest', {
      type: 'Test',
      resolve(root: any) {
        return root.parrentTest
      },
    })
    t.int('parrentTestId')
  },
})
