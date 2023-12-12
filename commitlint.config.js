module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']],
        // Add or customize rules based on your project's needs
      }
};
