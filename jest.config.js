const ignores = ['/node_modules/', '/__tests__/helpers/', '__mocks__']

module.exports = {
  moduleDirectories: ['node_modules', 'utils', __dirname],
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  collectCoverageFrom: ['src/**/*.+(js|jsx|ts|tsx)'],
  testMatch: ['**/__tests__/**/*.+(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [...ignores],
}
