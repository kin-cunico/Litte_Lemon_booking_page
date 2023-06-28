module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["src/app/jest.setup.js"],
	preset: "src/app/jest.setup.js",
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest",
	},
	moduleFileExtensions: [".js", ".jsx"],
};
