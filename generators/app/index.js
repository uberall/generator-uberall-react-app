'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = Generator.extend({
  initializing: function () {
    this.composeWith(require.resolve('generator-git-init'));
  },
  prompting: function () {
    this.log(yosay('Hi...'));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'How would you like to name this project?',
      default: this.appname,
      store: true
    }, {
      type: 'input',
      name: 'projectDescription',
      message: 'Can you briefly describe this project?',
      default: 'Yet another awesome Uberall app!',
      store: true
    }, {
      type: 'input',
      name: 'port',
      message: 'In which port would you like this app dev server to run?',
      default: '3000',
      store: true
    }, {
      type: 'confirm',
      name: 'usesRedux',
      message: 'Do you need Redux to handle your data flow?',
      store: true
    }];

    return this.prompt(prompts)
              .then(props => {
                this.props = props;
              });
  },

  writing: function () {
    // package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        projectName: _.kebabCase(this.props.projectName),
        projectDescription: this.props.projectDescription,
        port: this.props.port,
        usesRedux: this.props.usesRedux
      });

    // .eslintrc
    this.fs.copy(
      this.templatePath('_.eslintrc'),
      this.destinationPath('.eslintrc')
    );

    // .gitignore
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );

    // README.md
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        projectName: _.kebabCase(this.props.projectName),
        projectDescription: this.props.projectDescription,
        port: this.props.port
      });

    // src/app.js
    this.fs.copyTpl(
      this.templatePath('src/app.js'),
      this.destinationPath('src/app.js'), {
        entryPointComponent: _.upperFirst(_.camelCase(this.props.projectName))
      });

    // webpack.config.js
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'), {
        bundleName: _.kebabCase(this.props.projectName),
        port: this.props.port
      });

    // webpack.config.prod.js
    this.fs.copyTpl(
      this.templatePath('webpack.config.prod.js'),
      this.destinationPath('webpack.config.prod.js'), {
        bundleName: _.kebabCase(this.props.projectName),
        port: this.props.port
      });

    [
      'plop-templates/',
      'src/main.less',
      'src/components',
      '.babelrc',
      '.editorconfig',
      'jest.config.json',
      'jestSetup.js',
      'plopfile.js'
    ].forEach(file => {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    });
  },

  install: function () {
    this.installDependencies({npm: true, bower: false, yarn: false});
  }
});
