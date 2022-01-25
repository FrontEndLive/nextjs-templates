'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'boolean',
        name: 'useStorybook',
        message: 'Use Storybook?',
        default: false,
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const componentNameCapitalized = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    let files = ["Component.tsx", "Component.spec.tsx", "index.ts"];
    if (this.props.useStorybook) {
      files.push("Component.stories.tsx");
    }
    files.forEach(file => {
      const newFileName = file.replace("Component", componentNameCapitalized);
      this.fs.copy(this.templatePath(file), this.destinationPath(`${componentNameCapitalized}/${newFileName}`), {
        process: function(content) {
          // Replace the word 'component' with the name of the component
          return content.toString().replaceAll('Component', componentNameCapitalized);
        }
      });
    });
  }
};
