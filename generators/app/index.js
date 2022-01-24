"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Project name",
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copy all files in templates folder
    this.fs.copy(
      this.templatePath("hidden/gitignore"),
      this.destinationPath(this.props.projectName + "/.gitignore")
    );
    this.fs.copy(
      this.templatePath("visible/**/*"),
      this.destinationPath(this.props.projectName)
    );

    // Replace name in package.json with selected project name
    const packageJson = this.fs.readJSON(
      this.destinationPath(this.props.projectName, "package.json")
    );
    packageJson.name = "@frontendlive/" + this.props.projectName;
    this.fs.writeJSON(
      this.destinationPath(this.props.projectName, "package.json"),
      packageJson
    );
  }

  install() {
    this.spawnCommandSync("pnpm", ["install"], {
      cwd: this.destinationPath(this.props.projectName),
    });
  }
};
