module.exports = {
  root: true,
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es2016',
    './rules/imports'
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {
    strict: 2
  }
};
