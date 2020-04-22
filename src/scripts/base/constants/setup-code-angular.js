export default {
  CONFIG: {
    INITIAL: `module.exports = {
  projects: [
    {
      engine: 'angular',
      collectDocsFrom: './src/scripts/angular',
      moduleName: 'angularComponents'
    }
  ],
  styles: [
    './dist/angularComponents.css'
  ],
  scripts: [
    './dist/angularComponents.js'
  ],
  other: [
    './dist/images/'
  ]
};
`
  },
  DOC: {
    INITIAL: `module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  properties: [
    {
      name: 'on-click',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Button',
      controller: function($window){
        const $ctrl = this;

        $ctrl.onClick = () => {
          $window.alert('Clicked!');
        };
      },
      dependencies: ['$window'],
      template: \`
      <pd-button on-click="$ctrl.onClick">
        Click Here
      </pd-button>\`
    }
  ]
};
`
  }
};
