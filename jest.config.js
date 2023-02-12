/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    'components/(.*)': '<rootDir>/src/components/$1',
    'utils/(.*)': '<rootDir>/src/utils/$1',
    'hooks/(.*)': '<rootDir>/src/hooks/$1',
    'types/(.*)': '<rootDir>/src/@types/$1',
    'styles/(.*)': '<rootDir>/src/styles/$1',
    'contexts/(.*)': '<rootDir>/src/contexts/$1',
    'datastructures/(.*)': '<rootDir>/src/datastructures/$1',
  },
}
