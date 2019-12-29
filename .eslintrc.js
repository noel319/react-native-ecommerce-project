module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error'],
    semi: ['error', 'never'],
    'global-require': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 0,
  },
}
