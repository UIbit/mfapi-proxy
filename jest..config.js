module.exports = {
  preset: 'ts-jest',                 // Use ts-jest preset to compile TS
  testEnvironment: 'node',           // Use Node environment
  testMatch: ['**/tests/**/*.test.ts'], // Match test files with *.test.ts in tests folder
  transform: {
    '^.+\\.ts$': 'ts-jest',           // Transform .ts files with ts-jest
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
