import { objectType } from 'nexus'

export const Answer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Answer',
  definition(t) {
    t.int('id')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
    t.boolean('isRigth')
  },
})
