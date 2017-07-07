module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'constructor-super': 1,
    curly: 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    eqeqeq: [2, 'smart'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [2, 'unix'],
    'no-extend-native': [
      2,
      {
        exceptions: ['Array', 'Function']
      }
    ],
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-native-reassign': 2,
    'no-spaced-func': 2,
    'no-this-before-super': 2,
    'no-unneeded-ternary': 2,
    'no-var': 1,
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': 2,
    'prefer-const': 1,
    'prefer-spread': 2,
    'prefer-template': 2,
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/no-did-mount-set-state': 1,
    'react/prop-types': 0
  },
  plugins: ['react', 'flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
