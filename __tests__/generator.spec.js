"use strict";
const path = require("path");
const helpers = require("yeoman-test");

const generator = require("../generators/app");

jest.setTimeout(30000);

describe("yo felive-nextjs", () => {
  let runResult;

  beforeAll(async () => {
    runResult = await helpers
      .run(generator, {
        resolved: require.resolve(
          path.join(__dirname, "../generators/app/index.js")
        ),
        namespace: "felive-nextjs",
      })
      .withPrompts({
        projectName: "test-project",
        includeInstall: false,
      });
  });

  it("creates files", () => {
    runResult.assertFile([
      "test-project/webapp/README.md",
      "test-project/webapp/package.json",
      "test-project/webapp/.gitignore",
    ]);
  });

  it("inserts the project name into package.json", () => {
    runResult.assertJsonFileContent("test-project/webapp/package.json", {
      name: "@frontendlive/test-project",
    });
  });
});
