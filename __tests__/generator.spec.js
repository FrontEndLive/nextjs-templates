"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-felive", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ projectName: "test-project" });
  });

  it("creates files", () => {
    assert.file(["test-project/README.md", "test-project/package.json", "test-project/.gitignore"]);
  });

  it("inserts the project name into package.json", () => {
    assert.jsonFileContent("test-project/package.json", {
      name: "@frontendlive/test-project"
    });
  });

});
