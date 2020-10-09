// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  //clearMocks: true,
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  coverageDirectory: "./coverage"
  //preset: "@shelf/jest-mongodb",
};
