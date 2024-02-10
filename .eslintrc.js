module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', '@react-native'],
  plugins: ['babel', '@typescript-eslint', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-explicit-any': 2,
  },
};
