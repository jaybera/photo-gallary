module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testEnvironment: "jsdom",
	collectCoverage: true,
	coverageReporters: ["lcov"],
	coverageDirectory: "test-coverage",
	coverageThreshold: {
		global: {
		branches: 0,
		functions: 0,
		lines: 0,
		statements: 0
	}
	},
};