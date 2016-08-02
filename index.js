module.exports = {
  extends: [
    './base',
    './react',
    './lodash'
  ].map(require.resolve),
  rules: { }
};
