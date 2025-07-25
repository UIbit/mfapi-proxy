module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts', '**/__tests__/**/*.test.ts'],
  // or simply
  // testMatch: ['**/tests/**/*.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
