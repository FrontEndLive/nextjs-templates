"use strict";
const path = require("path");
const helpers = require("yeoman-test");

const generator = require("../generators/app");

jest.setTimeout(30000);

describe("yo fel-nextjs", () => {
  let runResult;

  beforeAll(async () => {
    runResult = await helpers
      .run(generator, {
        resolved: require.resolve(
          path.join(__dirname, "../generators/app/index.js")
        ),
        namespace: "fel-nextjs",
      })
      .withPrompts({
        projectName: "test-project",
      });
  });

  it("creates files", () => {
    runResult.assertFile([
      "test-project/README.md",
      "test-project/package.json",
      "test-project/.gitignore",
    ]);
  });

  it("inserts the project name into package.json", () => {
    runResult.assertJsonFileContent("test-project/package.json", {
      name: "@frontendlive/test-project",
    });
  });
});
