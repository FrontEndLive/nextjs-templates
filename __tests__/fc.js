"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-felive:fc", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/fc"))
      .withPrompts({ name: "NavBar", useStorybook: false });
  });

  it("creates files", () => {
    assert.file(["NavBar/NavBar.tsx", "NavBar/NavBar.spec.tsx"]);
    assert.noFile(["NavBar/NavBar.stories.tsx"]);
  });
});

describe("generator-felive:fc with Storybook", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/fc"))
      .withPrompts({ name: "NavBar", useStorybook: true });
  });

  it("creates files", () => {
    assert.file([
      "NavBar/NavBar.tsx",
      "NavBar/NavBar.spec.tsx",
      "NavBar/NavBar.stories.tsx",
    ]);
  });
});
