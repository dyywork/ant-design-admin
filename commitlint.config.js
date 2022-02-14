module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['foo']],
    },
    prompt: {
        messages: {},
        questions: {
          type: {
            description: 'please input type:',
          },
        },
      },
};