module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Creates a new React component with tests',
    prompts: [{
      type: 'confirm',
      name: 'isReduxy',
      message: 'Would you like to use Redux here?'
    }, {
      type: 'list',
      name: 'componentType',
      message: 'What type of component?',
      choices: ['stateless', 'stateful'],
      default: 'stateless',
      when: answers => {
        return !answers.isReduxy;
      }
    }, {
      type: 'input',
      name: 'componentName',
      message: 'How do you want to call it?'
    }, {
      type: 'confirm',
      name: 'isStylish',
      message: 'Would you like to add a stylesheet for this?'
    }],
    actions: function (data) {
      let actions = [];

      if (data.isReduxy) {
        actions.push({
          type: 'add',
          path: './src/components/{{dashCase componentName}}/reducers.js',
          templateFile: './plop-templates/components/reducers.js'
        }, {
          type: 'add',
          path: './src/components/{{dashCase componentName}}/__tests__/reducers-test.js',
          templateFile: './plop-templates/components/reducers-test.js'
        }, {
          type: 'add',
          path: './src/components/{{dashCase componentName}}/actions.js',
          templateFile: './plop-templates/components/actions.js'
        }, {
          type: 'add',
          path: './src/components/{{dashCase componentName}}/{{dashCase componentName}}-container.js',
          templateFile: './plop-templates/components/container.js'
        }, {
          type: 'add',
          path: './src/components/{{dashCase componentName}}/__tests__/{{dashCase componentName}}-container-test.js',
          templateFile: './plop-templates/components/container-test.js'
        }, {
          type: 'add',
          path: './src/components/{{dashCase componentName}}/{{dashCase componentName}}.js',
          templateFile: './plop-templates/components/stateless.js'
        });
      } else if (data.componentType === 'stateless') {
        actions.push({
          type: 'add',
          path: './src/components/{{dashCase componentName}}/{{dashCase componentName}}.js',
          templateFile: './plop-templates/components/stateless.js'
        });
      } else if (data.componentType === 'stateful') {
        actions.push({
          type: 'add',
          path: './src/components/{{dashCase componentName}}/{{dashCase componentName}}.js',
          templateFile: './plop-templates/components/stateful.js'
        });
      }

      actions.push({
        type: 'add',
        path: './src/components/{{dashCase componentName}}/__tests__/{{dashCase componentName}}-test.js',
        templateFile: './plop-templates/components/component-test.js'
      });

      if (data.isStylish) {
        actions.push({
          type: 'add',
          path: './src/components/{{dashCase componentName}}/styles.less',
          templateFile: './plop-templates/components/styles.less'
        });
      }

      return actions;
    }
  });
};
