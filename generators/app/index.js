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
      {
        type: "confirm",
        name: "includeInstall",
        message: "Install dependencies?",
        default: true,
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectDirectory = this.props.projectName + "/webapp"
    });
  }

  writing() {
    // Copy all core files in templates folder
    this.fs.copy(
      this.templatePath("core/hidden/gitignore"),
      this.destinationPath(this.props.projectDirectory + "/.gitignore")
    );
    this.fs.copy(
      this.templatePath("core/hidden/eslintrc.js"),
      this.destinationPath(this.props.projectDirectory + "/.eslintrc.js")
    );
    this.fs.copy(
      this.templatePath("core/visible/**/*"),
      this.destinationPath(this.props.projectDirectory)
    );

    // Replace name in package.json with selected project name
    const packageJson = this.fs.readJSON(
      this.destinationPath(this.props.projectDirectory, "package.json")
    );
    packageJson.name = "@frontendlive/" + this.props.projectName;
    this.fs.writeJSON(
      this.destinationPath(this.props.projectDirectory, "package.json"),
      packageJson
    );
  }

  install() {
    if (this.props.includeInstall) {
      this.spawnCommandSync("pnpm", ["install"], {
        cwd: this.destinationPath(this.props.projectDirectory),
      });
    }
  }
};
