module.exports = {
  extends: [
    'eslint-config-ricepo-base',
    './rules/react',
    './rules/overrides'
  ].map(require.resolve),
  rules: { }
};
