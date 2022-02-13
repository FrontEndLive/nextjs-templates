"use strict";
const path = require("path");
const helpers = require("yeoman-test");
const generator = require("../generators/fc");

describe("yo felive-nextjs:fc", () => {
  let runResult;

  beforeAll(async () => {
    runResult = await helpers
      .run(generator, {
        resolved: require.resolve(
          path.join(__dirname, "../generators/fc/index.js")
        ),
        namespace: "fel-nextjs:fc",
      })
      .withPrompts({
        name: "NavBar",
      });
  });

  it("creates files", () => {
    runResult.assertFile(["NavBar/index.tsx", "NavBar/NavBar.spec.tsx"]);
    runResult.assertNoFile(["NavBar/NavBar.stories.tsx"]);
  });
});

describe("yo felive-nextjs:fc (with Storybook)", () => {
  let runResult;

  beforeAll(async () => {
    runResult = await helpers
      .run(generator, {
        resolved: require.resolve(
          path.join(__dirname, "../generators/fc/index.js")
        ),
        namespace: "fel-nextjs:fc",
      })
      .withPrompts({
        name: "NavBar",
        useStorybook: true,
      });
  });

  it("creates files", () => {
    runResult.assertFile([
      "NavBar/index.tsx",
      "NavBar/NavBar.spec.tsx",
      "NavBar/NavBar.stories.tsx",
    ]);
  });
});
