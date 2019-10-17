// add libs to this array that should not be transformed
const esModules = ['[ionic]'].join('|');

module.exports = {
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
