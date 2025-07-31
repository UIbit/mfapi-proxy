module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/Tests/**/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
