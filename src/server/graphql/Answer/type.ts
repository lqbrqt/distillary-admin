import { objectType } from 'nexus'

export const Answer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Answer',
  definition(t) {
    t.int('id')
    t.field('question', {
      type: 'Question',
      resolve(root: any) {
        return root.question
      },
    })
    t.int('questionId')
    t.boolean('isRight')
    t.field('inCompleteTest', {
      type: 'CompleteTest',
      resolve(root: any) {
        return root.inCompleteTest
      },
    })
    t.int('inCompleteTestId')
  },
})
