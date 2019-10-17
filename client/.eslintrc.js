module.exports = {
  ...require('@bison/global-auto-configurations').eslint,

  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['app', './src/app'],
          ['environments', './src/environments'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
