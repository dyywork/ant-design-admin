module.exports = {
   extends: [
     '@commitlint/config-conventional'
    ],
    rules:{
      'type-enum': 
      [2, 'always', 
      ['build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test']],
    },
    prompt: {
      questions: {
        type: {
          enum: {
            feat: {
              description: 'A new feature',
              title: 'Features',
              emoji: '✨',
            }
          }
        }
      }
    }
  };
