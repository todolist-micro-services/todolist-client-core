module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@core/dto": "<rootDir>/src/dto/main.ts",
    "^@core/core(.*)$": "<rootDir>/src/core/$1",
    "^@core/reducer(.*)$": "<rootDir>/src/reducer/$1",
    "^@core/utils": "<rootDir>/src/utils/main.ts",
    "^@core/viewModels": "<rootDir>/src/viewModels/main.ts",
    "^@core/middleware": "<rootDir>/src/middleware/main.ts",
  },
};
