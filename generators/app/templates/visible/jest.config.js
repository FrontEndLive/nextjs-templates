module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json"
    }
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  testMatch: [
    "<rootDir>/**/*.spec.{ts,tsx,js,jsx}",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
    "^.+\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
}
