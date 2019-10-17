module.exports = {
  '*.css': ['stylelint', 'prettier --parser css --write', 'git add'],
  '*.scss': ['stylelint --syntax=scss', 'prettier --parser scss --write', 'git add'],
  '*.{ts,tsx}': ['eslint', 'prettier --parser typescript --write', 'git add'],
  '*.{js,css,json,md}': ['prettier --write', 'git add'],
};
