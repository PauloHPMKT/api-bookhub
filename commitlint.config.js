module.exports = { 
    extends: ["@commitlint/config-conventional"],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']],
        'subject-case': [2, 'always', 'sentence-case'],
        // Add or customize rules based on your project's needs
      } 
};