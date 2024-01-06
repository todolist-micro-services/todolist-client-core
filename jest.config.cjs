module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@core/dto": "<rootDir>/src/dto/main.ts",
    "^@core/core": "<rootDir>/src/core/main.ts",
    "^@core/reducer": "<rootDir>/src/reducer/main.ts",
    "^@core/utils": "<rootDir>/src/utils/main.ts",
    "^@core/viewModels": "<rootDir>/src/viewModels/main.ts",
  },
};
