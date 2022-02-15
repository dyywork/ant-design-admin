module.exports = {
   extends: [
     '@commitlint/config-conventional'
    ],
    rules:{
      'type-enum': [2, 'always', ['add', 'change', 'merge']],
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
