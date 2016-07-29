module.exports = {
  extends: [
    'eslint-config-ricepo-base',
    './rules/react'
  ].map(require.resolve),
  rules: { }
};
